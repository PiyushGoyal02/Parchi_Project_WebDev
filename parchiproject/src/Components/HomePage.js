import Navbar from "./Navbar"
import "../CSS-CODE/HomePageCSS.css"
import Location from "./HomePage/Location"
import VideoCall from "../Assets/VideoCall.jpg"
import FindDoctor from "../Assets/DSC03239.jpeg"
import Surgeries from "../Assets/minimally-invasive-cardiac-surgery.jpg"
import HorizantalSlider from "./HomePage/HorizantalSlider"


function HomePage(){
    return (
        <div>
            <Navbar/>
            <hr className="HR-Tag-HomePage"/>
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

                <div className="FirstBox">
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
            <HorizantalSlider/>
        </div>
    )
}

export default HomePage