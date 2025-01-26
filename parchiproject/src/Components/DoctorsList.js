import React from "react";
import Navbar from "./Navbar";
import Location from "./HomePage/Location";
import "../CSS-CODE/DoctorsListCSS.css";
import { MdVerified } from "react-icons/md";
import DrImage from "../Assets/Doctor.jpg";
import { FaThumbsUp } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import DrSisterImage from "../Assets/DrSisterImage.jpg";

function DoctorsList() {
  const Navigator = useNavigate();
  return (
    <div>
      {/* It's For Only Website Code */}
      <div className="WebsiteCodeDoctorList">
        <Navbar />
        <Location />

        <div>
          <div className="BlueShadebox"></div>

          <div className="SevenSixtySevenText-BookAppointmentText">
            <h1>767 Dentists available in Chandigarh</h1>
            <div className="VerifiedIcon-Text">
              <MdVerified />
              <p>
                Book appointments with minimum wait-time & verified doctor
                details
              </p>
            </div>
          </div>

          <div>
            <hr className="HR-Tag" />
            <div className="ImageTextContant-BookAppointmentButton">
              <div className="DoctorsDetailsDiv">
                <div>
                  <img src={DrImage} className="DoctorsImage" />
                </div>

                <div className="DoctorTextContact">
                  <p className="CosmeticDental">Cosmetic Dental Clinic</p>
                  <p>Dentist</p>
                  <p>4-29 Years experince</p>
                  <p className="BoldSection">Indirangar</p>
                  <p className="BoldSection">
                    ₹300-₹600 <span>Consultation Fees</span>
                  </p>

                  <div className="Button-PatientText">
                    <button className="Thumbup-NinetyEightText">
                      <FaThumbsUp />
                      98%
                    </button>
                    <p>177 Patient Stories</p>
                  </div>
                </div>
              </div>

              <div>
                <button className="BookAppointmentButton">
                  Boook Appontment
                </button>
              </div>
            </div>
            <hr className="HR-Tag" />
          </div>

          <div>
            {/* <hr className="HR-Tag"/> */}
            <div className="ImageTextContant-BookAppointmentButton">
              <div className="DoctorsDetailsDiv">
                <div>
                  <img src={DrImage} className="DoctorsImage" />
                </div>

                <div className="DoctorTextContact">
                  <p className="CosmeticDental">Cosmetic Dental Clinic</p>
                  <p>Dentist</p>
                  <p>4-29 Years experince</p>
                  <p className="BoldSection">Indirangar</p>
                  <p className="BoldSection">
                    ₹300-₹600 <span>Consultation Fees</span>
                  </p>

                  <div className="Button-PatientText">
                    <button className="Thumbup-NinetyEightText">
                      <FaThumbsUp />
                      98%
                    </button>
                    <p>177 Patient Stories</p>
                  </div>
                </div>
              </div>

              <div>
                <button className="BookAppointmentButton">
                  Boook Appontment
                </button>
              </div>
            </div>
            <hr className="HR-Tag" />
          </div>

          <div>
            {/* <hr className="HR-Tag"/> */}
            <div className="ImageTextContant-BookAppointmentButton">
              <div className="DoctorsDetailsDiv">
                <div>
                  <img src={DrImage} className="DoctorsImage" />
                </div>

                <div className="DoctorTextContact">
                  <p className="CosmeticDental">Cosmetic Dental Clinic</p>
                  <p>Dentist</p>
                  <p>4-29 Years experince</p>
                  <p className="BoldSection">Indirangar</p>
                  <p className="BoldSection">
                    ₹300-₹600 <span>Consultation Fees</span>
                  </p>

                  <div className="Button-PatientText">
                    <button className="Thumbup-NinetyEightText">
                      <FaThumbsUp />
                      98%
                    </button>
                    <p>177 Patient Stories</p>
                  </div>
                </div>
              </div>

              <div>
                <button className="BookAppointmentButton">
                  Boook Appontment
                </button>
              </div>
            </div>
            <hr className="HR-Tag" />
          </div>
        </div>
      </div>

      {/* It's For Only Mobile Phone Code */}
      <div className="MobilePhoneFindDoctorYourAfterClick">
        {/* Heading Content Blue Box */}
        <div className="FindYourDocotrHeading">
          <div
            onClick={() => Navigator(-1)}
            className="BackIocn-FindYourDoctorText"
          >
            <FaAngleLeft />
            <p>Find Your Doctor</p>
          </div>

          <div className="LocationName-DownIcon">
            <p>Bangalore</p>
            <FaAngleDown />
          </div>
        </div>

        {/* BoxContent */}
        <div className="BoxContentDiv">
          {/* Search Bar */}
          <div className="SearchBarFindDictors">
            <div className="search-bar-container">
              <input
                type="text"
                className="search-bar-input"
                placeholder="Search Doctors"
              />
              <span className="search-icon">
                <i className="fas fa-search"></i>{" "}
                {/* Using Font Awesome for the search icon */}
              </span>
            </div>
          </div>

          {/* Two Button */}
          <div className="TwoButtons">
            <button className="ButtonCSSCode">
              <div className="HouseIocn-InClinictext">
                <div className="PlusHouseCircle">
                  <FaHouseChimneyMedical />
                </div>
                <p>
                  In-Clinic <br />
                  Appointment
                </p>
              </div>
            </button>

            <button className="ButtonCSS-VideoConsultation">
              <div className="HouseIocn-VideoConsultation">
                <div className="VideoCircle">
                  <IoVideocam />
                </div>
                <p>
                  Video <br />
                  Consultation
                </p>
              </div>
            </button>
          </div>

          {/* Slider Text options */}
          <div className="HorizentalSwipeOptions">
            <p className="TextoptionsDiv">Now or Later</p>
            <p className="TextoptionsDiv">Video Consult</p>
            <p className="TextoptionsDiv">Plus</p>
            <p className="TextoptionsDiv">Sort/Filter</p>
            <p className="TextoptionsDiv">Gender</p>
          </div>
        </div>

        {/* Doctor Details One */}
        <div className="doctor-card">
          <div className="doctor-card-header">
            <img
              src={DrSisterImage} // Replace with actual image URL
              alt="Dr. Neha Aggrawal"
              className="doctor-card-image"
            />
            <div className="DoctorDetails">
              <h2 className="doctor-card-name">Dr. Neha Aggrawal</h2>
              <p className="doctor-card-title">General Physician</p>
              <p className="doctor-card-experience">21 yrs of exp. overall</p>
              <p className="doctor-card-stories">19 Patient Stories</p>
            </div>
          </div>
          <div className="doctor-card-stats">
            <div className="doctor-card-recommendation">
              <span className="recommendation-percentage">81%</span>
              <p>Patient Recommendation</p>
            </div>
            <div className="doctor-card-rating">
              <span className="rating-value">4.2</span>
              <p>Hospital Excellence Rating</p>
            </div>
          </div>
          <div className="doctor-card-info">
            <button className="PractoAssuredButton">Practo Assured</button>
            <p>Ramamurthy Nagar - Surgecare Super Speciality Hospital</p>
            <p>~ ₹600 Consultation Fees</p>
          </div>
          <div className="doctor-card-actions">
            <button className="contact-clinic-button">Contact Clinic</button>
            <button className="book-visit-button">Book Clinic Visit</button>
          </div>
          <div className="doctor-card-availability">
            Next Available at: <span>10:00 AM, tomorrow</span>
          </div>
        </div>

        {/* Doctor Details Two */}
        <div className="doctor-card">
          <div className="doctor-card-header">
            <img
              src={DrSisterImage} // Replace with actual image URL
              alt="Dr. Neha Aggrawal"
              className="doctor-card-image"
            />
            <div className="DoctorDetails">
              <h2 className="doctor-card-name">Dr. Neha Aggrawal</h2>
              <p className="doctor-card-title">General Physician</p>
              <p className="doctor-card-experience">21 yrs of exp. overall</p>
              <p className="doctor-card-stories">19 Patient Stories</p>
            </div>
          </div>
          <div className="doctor-card-stats">
            <div className="doctor-card-recommendation">
              <span className="recommendation-percentage">81%</span>
              <p>Patient Recommendation</p>
            </div>
            <div className="doctor-card-rating">
              <span className="rating-value">4.2</span>
              <p>Hospital Excellence Rating</p>
            </div>
          </div>
          <div className="doctor-card-info">
            <button className="PractoAssuredButton">Practo Assured</button>
            <p>Ramamurthy Nagar - Surgecare Super Speciality Hospital</p>
            <p>~ ₹600 Consultation Fees</p>
          </div>
          <div className="doctor-card-actions">
            <button className="contact-clinic-button">Contact Clinic</button>
            <button className="book-visit-button">Book Clinic Visit</button>
          </div>
          <div className="doctor-card-availability">
            Next Available at: <span>10:00 AM, tomorrow</span>
          </div>
        </div>

        {/* Doctor Details Three */}
        <div className="doctor-card">
          <div className="doctor-card-header">
            <img
              src={DrSisterImage} // Replace with actual image URL
              alt="Dr. Neha Aggrawal"
              className="doctor-card-image"
            />
            <div className="DoctorDetails">
              <h2 className="doctor-card-name">Dr. Neha Aggrawal</h2>
              <p className="doctor-card-title">General Physician</p>
              <p className="doctor-card-experience">21 yrs of exp. overall</p>
              <p className="doctor-card-stories">19 Patient Stories</p>
            </div>
          </div>
          <div className="doctor-card-stats">
            <div className="doctor-card-recommendation">
              <span className="recommendation-percentage">81%</span>
              <p>Patient Recommendation</p>
            </div>
            <div className="doctor-card-rating">
              <span className="rating-value">4.2</span>
              <p>Hospital Excellence Rating</p>
            </div>
          </div>
          <div className="doctor-card-info">
            <button className="PractoAssuredButton">Practo Assured</button>
            <p>Ramamurthy Nagar - Surgecare Super Speciality Hospital</p>
            <p>~ ₹600 Consultation Fees</p>
          </div>
          <div className="doctor-card-actions">
            <button className="contact-clinic-button">Contact Clinic</button>
            <button className="book-visit-button">Book Clinic Visit</button>
          </div>
          <div className="doctor-card-availability">
            Next Available at: <span>10:00 AM, tomorrow</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsList;
