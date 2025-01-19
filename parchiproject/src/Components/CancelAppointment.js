import React from "react";
import "../CSS-CODE/CancelAppointmentCSS.css";
import Navbar from "./Navbar";

function CancelAppointment() {
  return (
    <div>
      <Navbar />

      <div className="CancelAppointmentDiv">
        <div className="cancellation-card">
          <h2 className="header">Appointment Cancellation</h2>
          <div className="appointment-details">
            <p>
              <b>Dr. Mukesh Bangera</b>
            </p>
            <p>Surgecare Super Speciality Hospital</p>
            <p>Date & Time: 20 Nov, 2024, at 10:30 PM</p>
            <p>Appointment ID: 20459687</p>
          </div>

          <div className="reason-section">
            <p className="reason-text">
              Please help us know the reason for cancelling:
            </p>
            <form className="reason-options">
              <div>
                <input type="radio" id="busy" name="reason" value="busy" />
                <label htmlFor="busy">I am busy</label>
              </div>
              <div>
                <input type="radio" id="forgot" name="reason" value="forgot" />
                <label htmlFor="forgot">Forgot about the appointment</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="changed"
                  name="reason"
                  value="changed"
                />
                <label htmlFor="changed">Changed my mind</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="visited"
                  name="reason"
                  value="visited"
                />
                <label htmlFor="visited">Visited another doctor</label>
              </div>
              <div>
                <input type="radio" id="far" name="reason" value="far" />
                <label htmlFor="far">Clinic/Hospital is far</label>
              </div>
              <div>
                <input type="radio" id="doctor" name="reason" value="doctor" />
                <label htmlFor="doctor">Doctor asked me to cancel</label>
              </div>
            </form>
          </div>

          <button className="cancel-button">Yes, I want to cancel</button>
        </div>
      </div>
    </div>
  );
}

export default CancelAppointment;
