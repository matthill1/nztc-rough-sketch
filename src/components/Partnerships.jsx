import './Partnerships.css'
import Wood from '../assets/company_logos/Wood.png'
import Apollo from '../assets/company_logos/Apollo.png'
import Centrica from '../assets/company_logos/Centrica_storage.png'
import Enquest from '../assets/company_logos/Enquest.png'
import Trac from '../assets/company_logos/Trac.png'
import Exon from '../assets/company_logos/Exon.png'

function Footer() {
    return (
        <div id="partnerships"> 
        <h3>Partnerships</h3>
        <p>Our partners help to shape the base portfolio of projects invested in by the Net
        Zero Technology Centre across our core programmes</p>
        <div className="footer_logo_container"> 
            <img className="footer_logo" src={Centrica}></img>
            <img className="footer_logo" src={Enquest}></img>
            <img className="footer_logo" src={Exon}></img>
            <img className="footer_logo" src={Apollo}></img>
            <img className="footer_logo" src={Trac}></img>
            <img className="footer_logo" src={Wood}></img>
        </div>
        <div> 
            <a>Looking to become a partner?</a>
            <a className="mhide">More about partnerships</a>
        </div>
        <form>
            <h3><img className="inline_nztc_logo" src="/public/nztc_logo.png"/>Join the conversation</h3>
            <div className="form_container"> 
                <p>Keep up to date with our latest news and analysis by subscribing to our regular newsletter</p>
                <input placeholder="Email address" type="email"></input>
                <button type="submit">SUBSCRIBE</button>
            </div>
            <label> 
            <input type="radio"/>
            I accept the terms and conitions in accordance with the <a href="#">Privacy Notice</a>
            </label>
        </form>
    </div>
    )
}

export default Footer
