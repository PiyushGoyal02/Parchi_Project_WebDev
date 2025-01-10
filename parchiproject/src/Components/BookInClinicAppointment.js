import Navbar from "./Navbar";
import "../CSS-CODE/BookInClinicAppointmentCSS.css";
import { LuHousePlus } from "react-icons/lu";
import { PiCalendarDotsLight } from "react-icons/pi";
import DrImage from "../Assets/istockphoto-1346124900-612x612.jpg";
import { BiSolidOffer } from "react-icons/bi";

function BookInClinicAppointment() {
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
                <button className="ConfirmButton">Confirm Clinic Visit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookInClinicAppointment;
