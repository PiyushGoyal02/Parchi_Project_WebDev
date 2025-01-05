import Navbar from "./Navbar"
import "../CSS-CODE/HomePageCSS.css"
import Location from "./HomePage/Location"


function HomePage(){
    return (
        <div>
            <Navbar/>
            <hr className="HR-Tag-HomePage"/>
            <Location/>
            
        </div>
    )
}

export default HomePage