import "../../CSS-CODE/HorizantalSliderCSS.css"
import AcneAndPimple from "../../Assets/Acne.png"
import ColdAndCough from "../../Assets/coughing.png"
import Depreesion from "../../Assets/12-mental-wellness.png"
import GirlsPeriods from "../../Assets/irregular-painful+period.png"
import Performance from "../../Assets/top-speciality-sexology.svg"
import ChildNotFelling from "../../Assets/top-speciality-pediatric.svg"

function HorizantalSlider (){
    return (
        <div>

            <div className="ProblemIconParentDiv">

                <div className="ProblemIconDiv">
                    <img
                        src={AcneAndPimple}
                        className="ProblemIcons"
                    />
                    <p>Acne, Pimple or <br/> skin issues</p>
                    <p className="CONSULTNOW">CONSULT NOW</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={Depreesion}
                        className="ProblemIcons"
                    />
                    <p>Depreesion or <br/> anxiety</p>
                    <p className="CONSULTNOW">CONSULT NOW</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={ColdAndCough}
                        className="ProblemIcons"
                    />
                    <p>Cold Cough or <br/> fever</p>
                    <p className="CONSULTNOW">CONSULT NOW</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={GirlsPeriods}
                        className="ProblemIcons"
                    />
                    <p>Period doubts or<br/>Pregnancy</p>
                    <p className="CONSULTNOW">CONSULT NOW</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={Performance}
                        className="ProblemIcons"
                    />
                    <p>Performance<br/>issues in bed</p>
                    <p className="CONSULTNOW">CONSULT NOW</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={ChildNotFelling}
                        className="ProblemIcons"
                    />
                    <p>Child Not Felling<br/>well</p>
                    <p className="CONSULTNOW">CONSULT NOW</p>
                </div>

            </div>

        </div>
    )
}

export default HorizantalSlider;