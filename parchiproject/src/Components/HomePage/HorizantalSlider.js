import "../../CSS-CODE/HorizantalSliderCSS.css"
import AcneAndPimple from "../../Assets/Acne.png"
import ColdAndCough from "../../Assets/coughing.png"
import Depreesion from "../../Assets/12-mental-wellness.png"
import GirlsPeriods from "../../Assets/irregular-painful+period.png"
import Performance from "../../Assets/top-speciality-sexology.svg"
import ChildNotFelling from "../../Assets/top-speciality-pediatric.svg"
import { useNavigate } from "react-router-dom"

function HorizantalSlider (){

    const Navigator = useNavigate();
    return (
        <div>

            <div className="ProblemIconParentDiv">

                <div onClick={() => Navigator('/doctorslist')} className="ProblemIconDiv">
                    <img
                        src={AcneAndPimple}
                        className="ProblemIcons"
                    />
                    <p className="MobilePhoneParagraphtag">Acne <br/> skin pimple</p>
                    <p className="WebsiteParagraphText">Acne, Pimple or <br/> skin issues</p>
                    <p className="CONSULTNOW WebsiteParagraphText">CONSULT NOW</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={Depreesion}
                        className="ProblemIcons"
                    />
                    <p className="MobilePhoneParagraphtag">Depreesion <br/> anxiety</p>
                    <p className="WebsiteParagraphText">Depreesion or <br/> anxiety</p>
                    <p className="CONSULTNOW WebsiteParagraphText">CONSULT NOW</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={ColdAndCough}
                        className="ProblemIcons"
                    />
                    <p className="MobilePhoneParagraphtag">Cold <br/> Fever</p>
                    <p className="WebsiteParagraphText">Cold Cough or <br/> fever</p>
                    <p className="CONSULTNOW WebsiteParagraphText">CONSULT NOW</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={GirlsPeriods}
                        className="ProblemIcons"
                    />
                    <p className="MobilePhoneParagraphtag">Peroid <br/> Pregnancy</p>
                    <p className="WebsiteParagraphText">Period doubts or<br/>Pregnancy</p>
                    <p className="CONSULTNOW WebsiteParagraphText">CONSULT NOW</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={Performance}
                        className="ProblemIcons"
                    />
                    <p className="MobilePhoneParagraphtag">Issues <br/> in bed</p>
                    <p className="WebsiteParagraphText">Performance<br/>issues in bed</p>
                    <p className="CONSULTNOW WebsiteParagraphText">CONSULT NOW</p>
                </div>

                <div className="ProblemIconDiv">
                    <img
                        src={ChildNotFelling}
                        className="ProblemIcons"
                    />
                    <p className="MobilePhoneParagraphtag">Child <br/> Felling</p>
                    <p className="WebsiteParagraphText">Child Not Felling<br/>well</p>
                    <p className="CONSULTNOW WebsiteParagraphText">CONSULT NOW</p>
                </div>

            </div>

        </div>
    )
}

export default HorizantalSlider;