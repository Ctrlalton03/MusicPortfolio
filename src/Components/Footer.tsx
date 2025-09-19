import Discord from '../assets/Icons/Discord.png';
import Fiverr from '../assets/Icons/Fiverr.png';
import Soundcloud from '../assets/Icons/Soundcloud.png';
import Spotify from '../assets/Icons/Spotify.png';
import Youtube from '../assets/Icons/Youtube.png';
import '../Css/Footer.css';



const Footer = () => {
    return (
        <>

            <footer className="Footer-container">
                <div className="footer-content">
                    
                    <div className="social-links">
                        <a href="https://discord.com/users/557216526906949633" target="_blank" rel="noopener noreferrer"><img src={Discord}/></a>
                        <a href="https://soundcloud.com/user-399106144" target="_blank" rel="noopener noreferrer"><img src={Soundcloud}/></a>
                        <a href="https://www.fiverr.com/jaweazy" target="_blank" rel="noopener noreferrer"><img src={Fiverr}/></a>
                        <a href="https://open.spotify.com/artist/1CaIocBKhmE130Oq4Bwhd1?si=a202a23027984e9d&nd=1&dlsi=7674ec0eaa4846f4" target="_blank" rel="noopener noreferrer"><img src={Spotify}/></a>
                        <a href="https://www.youtube.com/@Jaweazy" target="_blank" rel="noopener noreferrer"><img src={Youtube}/></a>
                    </div>
                    <p>&copy; 2025 Your Company. Jawazy All rights reserved.</p>
                </div>
            </footer>
        
        
        
        </>


    );
}

export default Footer;