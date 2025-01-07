import Navbar from "./Navbar"
import "../CSS-CODE/HomePageCSS.css"
import Location from "./HomePage/Location"
import VideoCall from "../Assets/VideoCall.jpg"
import FindDoctor from "../Assets/DSC03239.jpeg"
import Surgeries from "../Assets/minimally-invasive-cardiac-surgery.jpg"
import HorizantalSlider from "./HomePage/HorizantalSlider"
import { useNavigate } from "react-router-dom"
import FindDoctorNearyou from "./FindDoctorNearYou"


function HomePage(){

    const Navigator = useNavigate()
    return (
        <div>
            <Navbar/>
            {/* <hr className="HR-Tag-HomePage"/> */}
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
    )
}

export default HomePage