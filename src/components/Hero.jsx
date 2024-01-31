import './Hero.css'
import { Nav } from "./Nav";
import  NZTC_logo  from '../assets/NZTC_title.png'

function Footer() {
    return (
        
        <div id="hero"> 
        <Nav/>
            <img className="nztc_logo" src={NZTC_logo}></img>
            <div className="hero_side_bar">
                <h1>The future of energy starts here.</h1>
                <h2>We help develop and deploy technology for an affordable Net Zero energy industry.</h2>
                <button>DISCOVER MORE</button>
            </div>
        </div>
    )
}

export default Footer
