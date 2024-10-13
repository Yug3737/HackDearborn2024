import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import './App.css';
import './results.css';

export default function App() {
  const [showResults, setShowResults] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const webcamRef = useRef(null);

  const handleShowResults = () => {
    setShowResults(true);
    setIsCameraOn(true);
  };

  const handleGoBack = () => {
    setShowResults(false);
    setImageSrc(null);
    setIsCameraOn(true);
  };

  const capture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    setImageSrc(image);
    setIsCameraOn(false);
  }, [webcamRef]);

  const uploadImage = async () => {
    if (!imageSrc) return;
    const formData = new FormData();
    const blob = await fetch(imageSrc).then((r) => r.blob());
    formData.append('file', blob, 'captured_image.jpg');

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const retakePhoto = () => {
    setImageSrc(null);
    setIsCameraOn(true);
  };

  return (
    <div className="container">
      {!showResults ? (
        <div className="homeContainer">
          {/* Left side - Soda Banner */}
          <div className="imageContainer">
            <img
              src={require('./img/soda_banner.jpg')}
              alt="Soda Banner"
              className="reactLogo"
            />
          </div>

          {/* Right side - Text and buttons */}
          <div className="textContainer">
            <div className="titleContainer">
              <h1>🧋Snap & Serve🧋</h1>
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
            <div className="centerContainer">
              <button onClick={handleShowResults} className="navigateButton">
                Go to Camera Page
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cameraSection">
          {/* Webcam or Captured Image Container */}
          <div className="imagePreviewContainer">
            {isCameraOn ? (
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="webcamPreview"
              />
            ) : (
              <img src={imageSrc} alt="Captured" className="capturedImage" />
            )}
          </div>

          {/* Centered Buttons Below Image */}
          <div className="buttonContainer">
            {!imageSrc && (
              <button onClick={capture} className="navigateButton">
                Capture Photo
              </button>
            )}
            {imageSrc && (
              <div>
                <button onClick={uploadImage} className="navigateButton">
                  Upload Image
                </button>
                <button onClick={retakePhoto} className="navigateButton">
                  Retake Photo
                </button>
              </div>
            )}
          </div>

          {/* Text and Back Button */}
          <div className="textContainer">
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

            <div className="centerContainer">
              <button onClick={handleGoBack} className="navigateButton">
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
