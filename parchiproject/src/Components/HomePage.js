import Navbar from "./Navbar"
import "../CSS-CODE/HomePageCSS.css"
import Location from "./HomePage/Location"
import VideoCall from "../Assets/VideoCall.jpg"
import FindDoctor from "../Assets/DSC03239.jpeg"
import Surgeries from "../Assets/minimally-invasive-cardiac-surgery.jpg"
import HorizantalSlider from "./HomePage/HorizantalSlider"
import { useNavigate } from "react-router-dom"
// import FindDoctorNearyou from "./FindDoctorNearYou"
import { MdPerson4 } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";


function HomePage(){

    const Navigator = useNavigate();

    // Running Text
    const [text] = useTypewriter({
        words: ["doctors", "clinics & hospitals", "Symptoms & Specialities", "medicines & testings"],
        loop: {}, // Infinite loop
        delaySpeed: 2000, // Delay between loops
        typeSpeed: 100, // Speed of typing
        deleteSpeed: 50, // Speed of deleting
    });

    return (
        <div>

            <div className="WebSiteHomePage">
                <Navbar/>
                <Location/>

                {/* Three Button ClickAble */}
                <div className="ThreeBoxParentDiv">

                    <div className="FirstBox">
                        <img
                            src={VideoCall}
                            className="Image-VC"
                        />
                        <div className="Boxes-Text">
                            <h3>Instant Video <br/> Consultation</h3>
                            <p>Connect within 60 secs</p>
                        </div>
                    </div>

                    <div onClick={()=> Navigator("/FindDoctor")} className="FirstBox">
                        <img
                            src={FindDoctor}
                            className="Image-VC"
                        />
                        <div className="Boxes-Text">
                            <h3>Find Doctors Near <br/> You</h3>
                            <p>Confirmed appointments</p>
                        </div>
                    </div>

                    <div className="FirstBox">
                        <img
                            src={Surgeries}
                            className="Image-VC"
                        />
                        <div className="Boxes-Text">
                            <h3>Surgeries</h3>
                            <p>Safe and trusted surgery <br/> centers</p>
                        </div>
                    </div>
                </div>

                {/* Horizental Slider */}

                <div className="Text-Button">
                    <div>
                        <h2>Consult top doctors online for any health concern</h2>
                        <p className="PrivateOnlineText">Private online consultations with verified doctors in all specialists</p>
                    </div>

                    <button className="ViewAllSpecialities">View All Specialities</button>
                </div>
                <HorizantalSlider/>
            </div>



            {/* For Mobile Phone Code */}

            <div className="MobilePhoneHomePage">

                {/* Blue Backgrond Box */}
                <div className="ColorHadingBox">

                    <div className="ContactMenu-LocationVibe">

                        <div className="ConteactMenuParentDiv">
                            <div className="ContactMenuCircleDiv">
                                <MdPerson4 className="PerosnIcon"/>
                            </div>
                        </div>

                        <div className="LocationDiv">
                            <FaLocationDot />
                            <p>Bangalore</p>
                            <FaAngleDown/>
                        </div>

                    </div>

                    <div className="InputTagDiv">
                        <input
                            type="text"
                            placeholder={`Search for ${text}`}
                            className="SearchInput"
                        />
                    </div>
                </div>

                {/* Tow Button Option's */}
                <div>
                    <div className="ThreeBoxParentDiv">

                        <div className="FirstBox">
                            <img
                                src={VideoCall}
                                className="Image-VC"
                            />
                            <div className="Boxes-Text">
                                <h3>Instant Video <br/> Consultation</h3>
                                <p>Connect within 60 secs</p>
                            </div>
                        </div>

                        <div onClick={()=> Navigator("/FindDoctor")} className="FirstBox">
                            <img
                                src={FindDoctor}
                                className="Image-VC"
                            />
                            <div className="Boxes-Text">
                                <h3>Find Doctors Near <br/> You</h3>
                                <p>Confirmed appointments</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Horizantal Slider Content */}
                <HorizantalSlider/>
            </div>


        </div>
    )
}

export default HomePage