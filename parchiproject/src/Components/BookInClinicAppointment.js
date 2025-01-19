import Navbar from "./Navbar";
import "../CSS-CODE/BookInClinicAppointmentCSS.css";
import { LuHousePlus } from "react-icons/lu";
import { PiCalendarDotsLight } from "react-icons/pi";
import DrImage from "../Assets/istockphoto-1346124900-612x612.jpg";
import { BiSolidOffer } from "react-icons/bi";
import { useState } from "react";
import VerifiedIcon from "../Assets/verified.png";
import { MdVerified } from "react-icons/md";
import { CgSandClock } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function BookInClinicAppointment() {
  const Navigator = useNavigate();
  const [buttonClickAfter, setButtonClickAfter] = useState(false);

  function handleButtonClickAppointmentDone() {
    setButtonClickAfter(true);
  }

  function handleCancelButtonClick() {
    Navigator('/cancelAppointment')
  }

  return (
    <div>
      <Navbar />

      <div className="ParentDivBookInClinic">
        <div className="LeftSideBoxContantBookAppointment">
          {/* Title Section with Icon */}
          <div className="HousePluslogo-BookInClinicText">
            <div className="PlusHouseDiv">
              <LuHousePlus />
            </div>
            <p>Book In-clinic Appointment</p>
          </div>

          {/* Date and Time Section */}
          <div className="DateAndTimeSection">
            <div>
              <p>
                <PiCalendarDotsLight /> On Jan 10, 2025
              </p>
              <p className="ChangeDateAndTimeText">Change Date & Time</p>
            </div>
            <p>At 5:20 PM</p>
          </div>

          {/* Doctor's Info Section */}
          <div className="DrImageAndText">
            <div className="DoctorImageDiv">
              <img src={DrImage} alt="Doctor" className="DoctorImagePic" />
            </div>
            <div>
              <p>
                Dr. Sumath Sharma <br />
                BDS, MDS - Paedodontics And Preventive Dentistry <br />
                Dentist, Implantologist, Pediatric Dentist, Cosmetic/Aesthetic
                Dentist, Preventive Dentistry, Dental Surgeon
              </p>
            </div>
            <hr />
          </div>

          {/* Address Section */}
          <div>
            <p>
              Address:{" "}
              <span>
                Surana Sethia Hospital and Research Center, Sion Trombay Road,
                VN Purav Marg, Sumannagar, Chembur
              </span>
            </p>
          </div>
        </div>

        {buttonClickAfter === false ? (
          <div>
            <div className="RightSideSectionBookInClinic">
              <div className="ApplySectionBox">
                <div className="ApplyLogoText">
                  <div className="OfferIcon">
                    <BiSolidOffer />
                  </div>
                  <div>
                    <p className="ApplyTitle">Apply Coupon</p>
                    <p className="ApplyDescription">
                      Unlock offers with <br /> coupon codes
                    </p>
                  </div>
                </div>
                <p className="ApplyButton">Apply</p>
              </div>

              <div className="BillDetails">
                <p className="BillTitle">Bill Details</p>

                <div className="BillItem">
                  <p>Consultation Fee</p>
                  <p>₹1000</p>
                </div>

                <div className="BillItem">
                  <p>Service Fee & Tax</p>
                  <span className="original-price">₹49</span>
                  <p className="FreeTag">FREE</p>
                  <p className="ServiceNote">
                    We care for you & provide a free <br /> booking
                  </p>
                </div>

                <div className="TotalPayment">
                  <div className="PaymentSummary">
                    <h3>Total Payment</h3>
                    <p>₹1000</p>
                  </div>

                  <div className="SaveMessage">
                    <p>
                      You have saved ₹49 on this <br /> appointment
                    </p>
                  </div>
                </div>

                <div className="AppointmentDetails">
                  <div className="PatientInfo">
                    <p className="PatientIcon">P</p>
                    <div className="AppointmentText">
                      <p>In-clinic Appointment for</p>
                      <p className="PatientName">Piyush Goyal</p>
                    </div>
                  </div>
                  <p className="ChangeButton">CHANGE</p>
                </div>

                <div className="PaymentActions">
                  <div className="AmountDetails">
                    <p className="FinalAmount">₹1000</p>
                    <p className="ViewBill">View Bill</p>
                  </div>
                  <div className="ConfirmButtonContainer">
                    <button
                      onClick={handleButtonClickAppointmentDone}
                      className="ConfirmButton"
                    >
                      Confirm Clinic Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="appointment-container">
              <div className="header-section">
                <img
                  src={VerifiedIcon}
                  className="verified-icon"
                  alt="Verified"
                />
                <h2 className="header-text">Appointment Confirmed</h2>
              </div>

              <div className="details-section">
                <p>
                  Your appointment ID is{" "}
                  <span className="appointment-id">25634187</span>
                </p>
                <p>We have sent you an email and SMS with the details</p>
                <p>
                  This appointment is covered under{" "}
                  <span className="prime-icon">
                    Prime <MdVerified />
                  </span>
                </p>
              </div>

              <div className="prime-benefits-section">
                <h3>
                  Prime <MdVerified /> benefits
                </h3>
                <hr className="divider" />
                <p className="promise-title">Our promise to you</p>
                <ul className="benefits-list">
                  <li>
                    <CgSandClock /> 30 mins or less wait time
                  </li>
                  <li>
                    <MdVerified /> Verified consultation fees of ₹ 1000
                  </li>
                  <li>
                    <MdVerified /> Verified Location
                  </li>
                  <li>
                    <MdVerified /> Assured meet with Dr. Meghana Nyapathi
                  </li>
                </ul>
              </div>

              <div className="contact-section">
                <div className="contact-item">
                  <p className="label">Patient Name</p>
                  <p className="value">Piyush Goyal</p>
                </div>
                <div className="contact-item">
                  <p className="label">Email</p>
                  <p className="value">goyalp3542@gmail.com</p>
                </div>
                <div className="contact-item">
                  <p className="label">Mobile</p>
                  <p className="value">+91 9685744163</p>
                </div>
              </div>

              <div className="action-buttons">
                <button onClick={handleCancelButtonClick} className="cancel-button">
                  Cancel Appointment
                </button>
                <button className="reschedule-button">
                  Reschedule Appointment
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default BookInClinicAppointment;
