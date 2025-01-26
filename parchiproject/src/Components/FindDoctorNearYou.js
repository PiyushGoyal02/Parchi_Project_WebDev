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
import { useTypewriter } from "react-simple-typewriter";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

function FindDoctorNearyou (){

    const doctors = [
        { id: 1, name: 'Naman Garg' },
        { id: 2, name: 'Piyush Goyal' },
        { id: 3, name: 'Mudit Bansal' },
        { id: 4, name: 'Ayush Aggrawal' },
        { id: 5, name: 'Naman Garg' },
        { id: 6, name: 'Piyush Goyal' },
        { id: 7, name: 'Mudit Bansal' },
        { id: 8, name: 'Ayush Aggrawal' },
    ];

    const Navigator = useNavigate();

    const [text] = useTypewriter({
        words: ["....", "......", "........"],
        loop: {}, // Infinite loop
        delaySpeed: 2000, // Delay between loops
        typeSpeed: 100, // Speed of typing
        deleteSpeed: 50, // Speed of deleting
    });

    // Running Text
    const [searchbar] = useTypewriter({
        words: ["doctors", "clinics & hospitals", "Symptoms & Specialities"],
        loop: {}, // Infinite loop
        delaySpeed: 2000, // Delay between loops
        typeSpeed: 100, // Speed of typing
        deleteSpeed: 50, // Speed of deleting
    });

    const problems = [
        { img: AcneAndPimple, text: 'Acne, Pimple', navigateTo: '/doctorslist' },
        { img: Depreesion, text: 'Depreesion & anxiety' },
        { img: ColdAndCough, text: 'Cold Cough' },
        { img: GirlsPeriods, text: 'Period Pregnancy' },
        { img: Performance, text: 'Performance' },
        { img: ChildNotFelling, text: 'Child Felling' },
    ];


    return (
        <div>

            <div className="WebsiteFindDrNearYou">
                <Navbar/>

                <div className="SearchBar">

                    <div class="search-container">
                        <button class="search-button">
                            <IoIosSearch />
                        </button>
                        <input type="text" class="search-input" placeholder={`Search ${text}`}/>
                    </div>

                </div>

                <div className="MostSearched">
                    <h1>Most Searched Doctor</h1>
                </div>

                <div className="PictureImageDiv">
                    {doctors.map((doctor) => (
                    <div key={doctor.id} className="DoctorImage-NameText">
                        <img src={DoctorImage} alt={`${doctor.name}'s profile`} className="DrImage" />
                        <h4>{doctor.name}</h4>
                    </div>
                    ))}
                </div>

                {/* <div className="buttonAllSpecialities">
                    <button className="AllSpecialities">View All Specialities</button>
                </div> */}

                <div className="FindADoctorForHealth">
                    <h1>Find a Doctor for health problem</h1>
                </div>


                {/* Body Problem icons */}
                <div className="ProblemIconParentDiv">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="ProblemIconDiv"
                            onClick={() => problem.navigateTo && Navigator(problem.navigateTo)}
                            style={{ cursor: problem.navigateTo ? 'pointer' : 'default' }}
                        >
                            <img src={problem.img} alt={problem.text} className="ProblemIcons" />
                            <p>{problem.text}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* Mobile Phone */}
            <div className="MobilePhoneFindDrNearYou">
                
                {/* Top Heading Content Blue Box */}
                <div className="BlueHeadingBox">

                    <div onClick={() => Navigator(-1)} className="BackText-icon">
                        <FaAngleLeft/>
                        <p>Back</p>
                    </div>

                    <h4>Find Your Doctor</h4>

                    <div className="LocationText-Icon">
                        <p>Bangalore</p>
                        <FaAngleDown/>
                    </div>
                </div>

                {/* Search Bar */}
                <div onClick={() => Navigator('/afterclicksearchbuttoninfindoctors')} className="SearchBarFindDictors">
                    <div className="search-bar-container">
                        <input
                            type="text"
                            className="search-bar-input"
                            placeholder={`Search ${searchbar}`}
                        />
                        <span className="search-icon">
                            <i className="fas fa-search"></i> {/* Using Font Awesome for the search icon */}
                        </span>
                    </div>
                </div>

                <h2 className="MostSearchedDoctor">Most Searched Doctor</h2>

                <div className="PictureImageDiv">
                    {doctors.map((doctor) => (
                    <div key={doctor.id} className="DoctorImage-NameText">
                        <img src={DoctorImage} alt={`${doctor.name}'s profile`} className="DrImage" />
                        <h4>{doctor.name}</h4>
                    </div>
                    ))}
                </div>

                <div className="ViewAllSpecialitiesDiv">
                    <button className="SpecialitiesButton">View All Specialities</button>
                </div>

                <h2 className="FindADoctorForHealth">Find a Doctor for health <br/> Problem</h2>
                <HorizantalSlider/>
            </div>
            
        </div>
    )
}

export default FindDoctorNearyou;