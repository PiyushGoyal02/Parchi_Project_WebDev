import React from "react";
import "../CSS-CODE/TimeSlotsCSS.css"
import DrImage from "../Assets/DSC03239.jpeg"


function TimeSlots() {

  const slots = {
    Morning: ["10:30 AM", "10:45 AM", "11:00 AM", "11:15 AM"],
    Afternoon: ["12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM"],
    Evening: ["05:00 PM", "05:15 PM", "05:30 PM", "05:45 PM"],
  };


  return (
    <div>
      {/* It's only for Mobile Phone */}

      <div className="container">
        <header className="header">
          <div className="doctor-info">
            <img
                className="profile-pic"
                src={DrImage}
              />
            <div>
              <h2>Dr. Anshudeep Dedake</h2>
              <p>Health Omega Clinic, Parel</p>
            </div>
          </div>
        </header>
        <div className="date-selector">
          <button>Today, 23 Nov</button>
          <button>Tomorrow, 24 Nov</button>
          <button>25 Nov</button>
          <button>26 Nov</button>
        </div>
        <h3>Today, 23 Nov</h3>
        {Object.entries(slots).map(([timeOfDay, times]) => (
          <div key={timeOfDay} className="slot-section">
            <h4>{timeOfDay} 4 slots</h4>
            <div className="slot-grid">
              {times.map((time, index) => (
                <button key={index} className="slot">
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeSlots;
