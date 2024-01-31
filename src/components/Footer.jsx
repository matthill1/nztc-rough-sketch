import './Footer.css'
import Facebook from '../assets/social_logos/facebook.svg'
import Linked_in from '../assets/social_logos/linkedin.svg'
import Twitter from '../assets/social_logos/twitter.svg'
import Youtube from '../assets/social_logos/youtube.svg'

function Footer() {
    return (
        <footer> 
            <p>©2021 Net Zero Technology Center</p>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <div class="social_logo_container"> 
                <a href="#"><img className="social_logo" src={Linked_in}></img></a>
                <a href="#"><img className="social_logo" src={Twitter}></img></a>
                <a href="#"><img className="social_logo" src={Youtube}></img></a>
                <a href="#"><img className="social_logo" src={Facebook}></img></a>
            </div>
        </footer>
    )
}

export default Footer
