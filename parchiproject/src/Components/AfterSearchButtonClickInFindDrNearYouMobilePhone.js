import "../CSS-CODE/AfterSearchButtonClickInFindDrNearYouMobilePhoneCSS.css"
import { FaAngleLeft } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import doctorimage from "../Assets/istockphoto-1346124900-612x612.jpg"
import { useNavigate } from "react-router-dom";

function AfterSearchButtonClickInFindDrNearYouMobilePhone (){

    const Navigator = useNavigate();

    const doctors = [
        { name: "Piyush Goyal", specialization: "Consultant physician", location: "santacruz west" },
        { name: "Piyush Sureshkumar Shah", specialization: "Pediatrician", location: "malad west, Mumbai" },
        { name: "Piyush Gujarathi", specialization: "Audiologist", location: "matunga, Mumbai" },
        { name: "Piyush Goyal", specialization: "Gynecologist", location: "bandra west, Mumbai" },
        { name: "Piyusha Shankar", specialization: "Prosthodontist", location: "pedder road, Mumbai" },
        { name: "Piyusha Jadhav", specialization: "Psychotherapist", location: "andheri east, Mumbai" },
        { name: "Piyush Sharma", specialization: "Skin & Hair", location: "andheri west, Mumbai" },
        { name: "Piyush Jain", specialization: "Basic Check-up", location: "bandra road, Mumbai" },
        { name: "Piyush Garg", specialization: "Consultant physician", location: "santacruz west" },
    ];
    return (
        <div>

            <div className="AfterClickSearchButtonMobile">

                <div className="backicon-LocationWithText">
                    <FaAngleLeft className="Icon" onClick={() => Navigator(-1)}/>
                    <div className="Text-Location">
                        <FaLocationDot className="locationicon"/>
                        <p>Bangalore</p>
                    </div>
                </div>
                <hr/>


                {/* Search Bar */}
                <div className="SearchBarFindDictors">
                    <div className="search-bar-container">
                        <input
                            type="text"
                            className="search-bar-input"
                            placeholder='Piy'
                        />
                        <span className="search-icon">
                            <i className="fas fa-search"></i> {/* Using Font Awesome for the search icon */}
                        </span>
                    </div>
                </div>


                {/* Doctor's Menu */}
                <div className="doctor-list">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="doctor-card">
                            <img
                                src={doctorimage} 
                                alt={`${doctor.name}`}
                                className="doctor-image"
                            />
                            <div className="doctor-info">
                                <h4 className="doctor-name">{doctor.name}</h4>
                                <p className="doctor-specialization">{doctor.specialization}</p>
                                <p className="doctor-location">{doctor.location}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default AfterSearchButtonClickInFindDrNearYouMobilePhone;