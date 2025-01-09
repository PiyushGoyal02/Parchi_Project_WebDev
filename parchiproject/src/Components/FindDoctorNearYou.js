import Navbar from "../Components/Navbar"
import "../CSS-CODE/FindDoctorNearyouCSS.css"
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import DoctorImage from "../Assets/istockphoto-1346124900-612x612.jpg"
import HorizantalSlider from "./HomePage/HorizantalSlider";
import AcneAndPimple from "../Assets/Acne.png"
import ColdAndCough from "../Assets/coughing.png"
import Depreesion from "../Assets/12-mental-wellness.png"
import GirlsPeriods from "../Assets/irregular-painful+period.png"
import Performance from "../Assets/top-speciality-sexology.svg"
import ChildNotFelling from "../Assets/top-speciality-pediatric.svg"

function FindDoctorNearyou (){

    const Navigator = useNavigate();

    return (
        <div>

            <Navbar/>

            <div className="SearchBar">

                <div class="search-container">
                    <button class="search-button">
                        <IoIosSearch />
                    </button>
                    <input type="text" class="search-input" placeholder="Search..."/>
                </div>

            </div>

            <div className="MostSearched">
                <h1>Most Searched Doctor</h1>
            </div>

            <div className="PictureImageDiv">

                <div className="DoctorImage-NameText">
                    <img
                        src={DoctorImage}
                        className="DrImage"
                    />
                    <h4>Naman Garg</h4>
                </div>

                <div className="DoctorImage-NameText">
                    <img
                        src={DoctorImage}
                        className="DrImage"
                    />
                    <h4>Piyush Goyal</h4>
                </div>

                <div className="DoctorImage-NameText">
                    <img
                        src={DoctorImage}
                        className="DrImage"
                    />
                    <h4>Mudit Bansal</h4>
                </div>

                <div className="DoctorImage-NameText">
                    <img
                        src={DoctorImage}
                        className="DrImage"
                    />
                    <h4>Ayush Aggrawal</h4>
                </div>

                <div className="DoctorImage-NameText">
                    <img
                        src={DoctorImage}
                        className="DrImage"
                    />
                    <h4>Naman Garg</h4>
                </div>

                <div className="DoctorImage-NameText">
                    <img
                        src={DoctorImage}
                        className="DrImage"
                    />
                    <h4>Piyush Goyal</h4>
                </div>

                <div className="DoctorImage-NameText">
                    <img
                        src={DoctorImage}
                        className="DrImage"
                    />
                    <h4>Mudit Bansal</h4>
                </div>

                <div className="DoctorImage-NameText">
                    <img
                        src={DoctorImage}
                        className="DrImage"
                    />
                    <h4>Ayush Aggrawal</h4>
                </div>
            </div>

            {/* <div className="buttonAllSpecialities">
                <button className="AllSpecialities">View All Specialities</button>
            </div> */}

            <div className="FindADoctorForHealth">
                <h1>Find a Doctor for health problem</h1>
            </div>


            {/* Body Problem icons */}
            <div className="ProblemIconParentDiv">

                <div onClick={() => Navigator('/doctorslist')} className="ProblemIconDiv">
                    <img
                        src={AcneAndPimple}
                        className="ProblemIcons"
                    />
                    <p>Acne, Pimple</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={Depreesion}
                        className="ProblemIcons"
                    />
                    <p>Depreesion & anxiety</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={ColdAndCough}
                        className="ProblemIcons"
                    />
                    <p>Cold Cough</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={GirlsPeriods}
                        className="ProblemIcons"
                    />
                    <p>Period Pregnancy</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={Performance}
                        className="ProblemIcons"
                    />
                    <p>Performance</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={ChildNotFelling}
                        className="ProblemIcons"
                    />
                    <p>Child Felling</p>
                </div>


                <div className="ProblemIconDiv">
                    <img
                        src={AcneAndPimple}
                        className="ProblemIcons"
                    />
                    <p>Acne, Pimple</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={Depreesion}
                        className="ProblemIcons"
                    />
                    <p>Depreesion & anxiety</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={ColdAndCough}
                        className="ProblemIcons"
                    />
                    <p>Cold Cough</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={GirlsPeriods}
                        className="ProblemIcons"
                    />
                    <p>Period Pregnancy</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={Performance}
                        className="ProblemIcons"
                    />
                    <p>Performance</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={ChildNotFelling}
                        className="ProblemIcons"
                    />
                    <p>Child Felling</p>
                </div>

            </div>

            
        </div>
    )
}

export default FindDoctorNearyou;