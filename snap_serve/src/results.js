import React, { useState } from 'react';
import './App.css'; // CSS file for styles
import './results.css'; // Separate CSS file for results page styles

export default function App() {
  // State to control which section to display (Home or Results)
  const [showResults, setShowResults] = useState(false);

  // Function to handle navigation to Results screen
  const handleShowResults = () => {
    setShowResults(true);
  };

  // Function to handle navigation back to Home screen
  const handleGoBack = () => {
    setShowResults(false);
  };

  return (
    <div>
      {/* Conditionally render HomeScreen or TabTwoScreen */}
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
              The app that allows <strong>you</strong> to get insights on the drinks you buy.
            </p>
            <p>
              <strong>Step 1:</strong> Take a picture of the drink's Barcode.<br />
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
          {/* Button to navigate to Results */}
          <button onClick={handleShowResults} className="navigateButton">
            View Results
          </button>
        </div>
      ) : (
        <div>
          {/* Results Section */}
          <img
            src={require('./img/camera_ClipArt.png')}
            alt="Camera Clip Art"
            className="headerImage"
          />

          <div className="titleContainer">
            <h1>Camera</h1>
          </div>

          <div className="stepContainer">
            <p>Scan a QR code or UPC Barcode</p>
          </div>

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
