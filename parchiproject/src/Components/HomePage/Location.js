import React from "react";
import { FaMapMarkerAlt, FaUserMd } from "react-icons/fa"; // Import specific icons
import "../../CSS-CODE/LocationCSS.css";
import { useTypewriter } from "react-simple-typewriter";

function Location() {

  const [text] = useTypewriter({
    words: ["doctors", "clinics & hospitals", "Symptoms & Specialities", "medicines & testings"],
    loop: {}, // Infinite loop
    delaySpeed: 2000, // Delay between loops
    typeSpeed: 100, // Speed of typing
    deleteSpeed: 50, // Speed of deleting
  });

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
          placeholder={`Search ${text}`}
          className="input-field"
        />
      </div>
    </div>
  );
}

export default Location;
