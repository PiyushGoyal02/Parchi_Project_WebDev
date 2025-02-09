import React from "react";
import "../CSS-CODE/CancellationCSS.css"
import { useNavigate } from "react-router-dom";

function Cancellation(){
    const Navigator = useNavigate();
    return (
        <div className="container">
        <button onClick={() => Navigator(-1)} className="close-btn">&times;</button>
        <h2 className="title">Free Cancellation</h2>
        <p className="description">
            No cancellation charges if appointment time is more than 2 hours away.
        </p>
        <div className="button-group">
            <button className="back-btn">Back</button>
            <button onClick={() => Navigator("/whywecancelappointment")} className="proceed-btn">Proceed</button>
        </div>
    </div>
    )
}

export default Cancellation