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
          placeholder="Enter location"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <FaUserMd className="icon" />
        <input
          type="text"
          id="doctor"
          name="doctor"
          placeholder="Enter doctor name"
          className="input-field"
        />
      </div>
    </div>
  );
}

export default Location;
