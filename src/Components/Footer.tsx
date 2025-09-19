import Discord from '../assets/Discord.png';
import Fiverr from '../assets/Fiverr.png';
import Soundcloud from '../assets/Soundcloud.png';
import Spotify from '../assets/Spotify.png';
import Youtube from '../assets/Youtube.png';
import '../Css/Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="Footer-container">
                <div className="footer-content">
                    <div className="social-links">
                        <a href="https://discord.com/users/557216526906949633" target="_blank" rel="noopener noreferrer">
                            <img src={Discord} alt="Discord" />
                        </a>
                        <a href="https://soundcloud.com/user-399106144" target="_blank" rel="noopener noreferrer">
                            <img src={Soundcloud} alt="Soundcloud" />
                        </a>
                        <a href="https://www.fiverr.com/jaweazy" target="_blank" rel="noopener noreferrer">
                            <img src={Fiverr} alt="Fiverr" />
                        </a>
                        <a href="https://open.spotify.com/artist/1CaIocBKhmE130Oq4Bwhd1?si=a202a23027984e9d&nd=1&dlsi=7674ec0eaa4846f4" target="_blank" rel="noopener noreferrer">
                            <img src={Spotify} alt="Spotify" />
                        </a>
                        <a href="https://www.youtube.com/@Jaweazy" target="_blank" rel="noopener noreferrer">
                            <img src={Youtube} alt="Youtube" />
                        </a>
                    </div>
                    <p>&copy; 2025 Jaweazy. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;