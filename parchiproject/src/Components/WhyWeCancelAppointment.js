import React from "react";
import "../CSS-CODE/WhyWeCancelAppointmentCSS.css";
import { FaAngleLeft } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function WhyWeCancelAppointment() {
  const [selectedReason, setSelectedReason] = useState("");
  const Navigator = useNavigate();
  const reasons = [
    "I am busy",
    "Forgot about the appointment",
    "Changed my mind",
    "Visited another doctor",
    "Clinic/Hospital is far",
    "Doctor asked me to cancel",
  ];

  return (
    <div>
      {/* It's only for Mobile Phone */}

      <div>
        <div className="HaderContent">
          <FaAngleLeft onClick={() => Navigator(-1)}/>
          <p>Practo | Find Doctors, Diagnostic Labs...</p>
        </div>

        <p className="AppointmentCancel">Appointment Cancel</p>
        <hr />

        <div className="container">
          <h2>Appointment Details</h2>
          <div className="doctor-info">
            <h3>Dr. Mukesh Bangera</h3>
            <p>Surgecare Super Speciality Hospital</p>
          </div>
          <p>
            <strong>Date & Time</strong>
            <br />
            20 Nov, 2024, at 10:30 PM
          </p>
          <p>
            <strong>Appointment ID</strong>
            <br />
            20459687
          </p>
          <h4>Please help us know the reason for cancelling:</h4>
          <div className="reason-box">
            {reasons.map((reason, index) => (
              <label key={index} className="radio-label">
                <input
                  type="radio"
                  name="cancelReason"
                  value={reason}
                  checked={selectedReason === reason}
                  onChange={() => setSelectedReason(reason)}
                />
                {reason}
              </label>
            ))}
          </div>
          <button className="cancel-btn">Yes, I want to cancel</button>
          <footer>
            <p>Copyright © 2017, Practo, All rights reserved</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default WhyWeCancelAppointment;
