import React from "react";
import Navbar from "./Navbar";
import Location from "./HomePage/Location";
import "../CSS-CODE/DoctorsListCSS.css"
import { MdVerified } from "react-icons/md";
import DrImage from "../Assets/Doctor.jpg"
import { FaThumbsUp } from "react-icons/fa";

function DoctorsList (){
    return (
        <div>
            <Navbar/>
            <Location/>

            <div>
                <div className="BlueShadebox"></div>

                <div className="SevenSixtySevenText-BookAppointmentText">
                    <h1>767 Dentists available in Chandigarh</h1>
                    <div className="VerifiedIcon-Text">
                        <MdVerified />
                        <p>Book appointments with minimum wait-time & verified doctor details</p>
                    </div>
                </div>

                <div>
                    <hr className="HR-Tag"/>
                    <div className="ImageTextContant-BookAppointmentButton">
                        <div className="DoctorsDetailsDiv">
                            <div>
                                <img
                                    src={DrImage}
                                    className="DoctorsImage"
                                />
                            </div>

                            <div className="DoctorTextContact">
                                <p className="CosmeticDental">Cosmetic Dental Clinic</p>
                                <p>Dentist</p>
                                <p>4-29 Years experince</p>
                                <p className="BoldSection">Indirangar</p>
                                <p className="BoldSection">₹300-₹600 <span>Consultation Fees</span></p>

                                <div className="Button-PatientText">
                                    <button className="Thumbup-NinetyEightText"><FaThumbsUp />98%</button>
                                    <p>177 Patient Stories</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className="BookAppointmentButton">Boook Appontment</button>
                        </div>
                    </div>
                    <hr className="HR-Tag"/>
                </div>


                <div>
                    {/* <hr className="HR-Tag"/> */}
                    <div className="ImageTextContant-BookAppointmentButton">
                        <div className="DoctorsDetailsDiv">
                            <div>
                                <img
                                    src={DrImage}
                                    className="DoctorsImage"
                                />
                            </div>

                            <div className="DoctorTextContact">
                                <p className="CosmeticDental">Cosmetic Dental Clinic</p>
                                <p>Dentist</p>
                                <p>4-29 Years experince</p>
                                <p className="BoldSection">Indirangar</p>
                                <p className="BoldSection">₹300-₹600 <span>Consultation Fees</span></p>

                                <div className="Button-PatientText">
                                    <button className="Thumbup-NinetyEightText"><FaThumbsUp />98%</button>
                                    <p>177 Patient Stories</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className="BookAppointmentButton">Boook Appontment</button>
                        </div>
                    </div>
                    <hr className="HR-Tag"/>
                </div>



                <div>
                    {/* <hr className="HR-Tag"/> */}
                    <div className="ImageTextContant-BookAppointmentButton">
                        <div className="DoctorsDetailsDiv">
                            <div>
                                <img
                                    src={DrImage}
                                    className="DoctorsImage"
                                />
                            </div>

                            <div className="DoctorTextContact">
                                <p className="CosmeticDental">Cosmetic Dental Clinic</p>
                                <p>Dentist</p>
                                <p>4-29 Years experince</p>
                                <p className="BoldSection">Indirangar</p>
                                <p className="BoldSection">₹300-₹600 <span>Consultation Fees</span></p>

                                <div className="Button-PatientText">
                                    <button className="Thumbup-NinetyEightText"><FaThumbsUp />98%</button>
                                    <p>177 Patient Stories</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className="BookAppointmentButton">Boook Appontment</button>
                        </div>
                    </div>
                    <hr className="HR-Tag"/>
                </div>


            </div>


        </div>
    )
}

export default DoctorsList;