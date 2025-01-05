import React from "react";
import { FaMapMarkerAlt, FaUserMd } from "react-icons/fa"; // Import specific icons
import "../../CSS-CODE/LocationCSS.css";

function Location() {
  return (
    <div className="location-container">
      <div className="input-group">
        <FaMapMarkerAlt className="icon" />
        <input
          type="text"
          id="location"
          name="location"
          placeholder="location"
          className="input-field location"
        />
      </div>

      <div className="input-group">
        <FaUserMd className="icon" />
        <input
          type="text"
          id="doctor"
          name="doctor"
          placeholder="Search doctors, clinics, hospitals etc..."
          className="input-field"
        />
      </div>
    </div>
  );
}

export default Location;
