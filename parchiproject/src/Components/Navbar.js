import BluePracto from "../Assets/logo.png"
import { FaAngleDown } from "react-icons/fa";
import "../CSS-CODE/NavbarCSS.css"
import { useNavigate } from "react-router-dom";

function Navbar (){

    const Navigator = useNavigate();
    return (
        <div>
            
            <div className="NavbarDiv">

                <div className="NavbarContantLine">

                    <div className="LeftSideNavBar">
                        {/* Practo Logo */}
                        <div onClick={() => Navigator("/")}>
                            <img
                                className="BluePractoLogo"
                                src={BluePracto}
                            />
                        </div>

                        {/* Points Left Side */}
                        <div className="Find-Video-Surgeries-Text">
                            <h3>Find Doctors</h3>
                            <h3>Video Consult</h3>
                            <h3>Surgeries</h3>
                        </div>
                    </div>


                    {/* Right Side Text Handle */}
                    <div className="RightNavBarContant">
                        <div className="NavbarRightSideContant">
                            <p>For Corporates</p>
                            <FaAngleDown />
                        </div>

                        <div className="NavbarRightSideContant">
                            <p>For Providers</p>
                            <FaAngleDown />
                        </div>

                        <div className="NavbarRightSideContant">
                            <p>Security & help</p>
                            <FaAngleDown />
                        </div>

                        <button className="Login-Signup-Button">Login/Signup</button>
                    </div>
                </div>


            </div>
            <hr className="HR-Tag-HomePage"/>
        </div>
    )
}

export default Navbar;