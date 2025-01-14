import React, { useState } from "react";

import "./assets/style_error.css";

function ErrorScreen() {
    const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mobile Number:", mobileNumber);
    console.log("Email:", email);
    alert("Form Submitted!");
  };

    return (
        <div className="container">
            <div className="header">
                <div className="header-left">
                    <div className="arrow" />
                    <p className="text">Back</p>
                </div>
                <p className="header-center">Payment</p>
            </div>

            <div class="text-container">
                <div class="main-text">Oh no!</div>
                <div class="sub-text">Our machine is experiencing a payment malfunction.</div>
            </div>

            <div className="frame">
                <div className="div">
                    <p className="text-wrapper">Notify Us About This Malfunction:</p>
                <div className="button">
                    <button className="button-2">Report Malfunction</button>
                    <div className="send" color="white" />
                </div>
                </div>
            </div>
            <br></br>
            <div className="frame">
                <div className="divForm">
                    <p className="text-wrapper">I Want an Update on My Report:</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="mobileNumber" className="label-text">Add Mobile Number</label>
                        
                        <input
                        className="form-control"
                        type="number"
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="000 - 000 - 0000"
                        required
                        />
                        <br></br>
                        <p className="text-error-center">or</p>
                        <label htmlFor="email" className="label-text">Add Email</label>
                        <input
                        className="form-control"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="adress@email.com"
                        required
                        />
                        <button className="share-button">
                            Share
                        </button>
                    </form>
                </div>
            </div>
                <p className="text-error-center">We’re sorry we can’t to complete your order at this time.</p>
            <div className="footer-button">
                <div className="button-figma-white">
                    Back to Homepage            
                </div>
                <p className="text-error-center">Or</p>
                <div className="button-figma">
                    Sprinkles Machines Locations
                </div>
            </div>
      </div>
    );
};
export default ErrorScreen;
