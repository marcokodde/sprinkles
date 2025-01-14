import React from "react";

import "./assets/style_success.css";

function SuccessScreen() {
    return (
        <div className="container">
            <div className="header">
                <div className="header-left">
                    <div className="arrow" />
                    <p className="text">Back</p>
                </div>
                <p className="header-center">Payment</p>
            </div>
            <p className="message">
            Your Cupcakes Are Being Delivered!
            </p>
            <div className="button-container">
                <p className="button">
                    CUPCAKE TIME!
                </p>
            </div>
      </div>
    );
};
export default SuccessScreen;
