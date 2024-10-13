import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios'; // Import axios
import './App.css'; // CSS file for styles
import './results.css'; // Separate CSS file for results page styles

export default function App() {
  // State to control which section to display (Home or Results)
  const [showResults, setShowResults] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const webcamRef = useRef(null);

  // Function to handle navigation to Results screen
  const handleShowResults = () => {
    setShowResults(true);
  };

  // Function to handle navigation back to Home screen
  const handleGoBack = () => {
    setShowResults(false);
    setImageSrc(null); // Clear the captured image when going back
  };

  // Function to capture image from webcam
  const capture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    setImageSrc(image);
  }, [webcamRef]);

  // Function to upload the image to the Flask server
  const uploadImage = async () => {
    if (!imageSrc) return; // Make sure there's an image to upload

    const formData = new FormData();
    const blob = await fetch(imageSrc).then((r) => r.blob());
    formData.append('file', blob, 'captured_image.jpg'); // Append the image to FormData

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Error uploading image:', error); // Handle error response
    }
  };

  return (
    <div>
      {/* Conditionally render HomeScreen or Camera screen */}
      {!showResults ? (
        <div>
          {/* Home Screen Section */}
          <img
            src={require('./img/soda_banner.jpg')}
            alt="Soda Banner"
            className="reactLogo"
          />
          <div className="titleContainer">
            <h1>Snap & Serve</h1>
          </div>
          <div className="stepContainer">
            <p>
              The app that allows <strong>you</strong> to get insights on food you buy.
            </p>
            <p>
              <strong>Step 1:</strong> Take a picture of the drink Barcode.<br />
              <strong>Step 2:</strong> Get insights on its sugar levels.<br />
              It's that simple!<br /><br />
            </p>
            <p>
              <strong>Color Breakdown:</strong><br />
              - Dark Green: Excellent<br />
              - Light Green: Good<br />
              - Yellow: Fair<br />
              - Red: Bad<br /><br />
            </p>
          </div>
          {/* Button to navigate to Camera page */}
          <button onClick={handleShowResults} className="navigateButton">
            Go to Camera Page
          </button>
        </div>
      ) : (
        <div>
          {/* Camera Section */}
          <img
            src={require('./img/camera_ClipArt.png')}
            alt="Camera Clip Art"
            className="headerImage"
          />
          <div className="titleContainer">
            <h1>Camera</h1>
          </div>
          {/* Webcam Component */}
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="100%"
          />
          <div className="stepContainer">
            <p>Scan UPC Barcode</p>
          </div>
          {/* Button to capture image */}
          <button onClick={capture} className="navigateButton">
            Capture Photo
          </button>

          {/* Display Captured Image */}
          {imageSrc && (
            <div>
              <h3>Captured Image:</h3>
              <img src={imageSrc} alt="Captured" />
              {/* Button to upload the captured image */}
              <button onClick={uploadImage} className="navigateButton">
                Upload Image
              </button>
            </div>
          )}

          {/* Item Information */}
          <div className="stepContainer">
            <p><strong>Item Information:</strong></p>
            <p>*Calories: Insert DATABASE Call + Color*</p>
            <p>*Fat: Insert DATABASE Call + Color*</p>
            <p>*Carbs: Insert DATABASE Call + Color*</p>
            <p>*Protein: Insert DATABASE Call + Color*</p>
            <p>*Fiber: Insert DATABASE Call + Color*</p>
            <p>*Sugar: Insert DATABASE Call + Color*</p>
            <p>*Sodium: Insert DATABASE Call + Color*</p>
          </div>

          {/* Button to navigate back to Home */}
          <button onClick={handleGoBack} className="navigateButton">
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}
