import '../Css/News.css';
import SpotifyPlayer from '../Components/SpotifyPlayer';
import {Link} from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";


const News = () => {
    return (
        <div className='NewsContainer'>
            <h1>News and Events</h1>
            <h3>Latest Release (Streaming Services)</h3>
            <SpotifyPlayer SpotifyPlaylistUrl="https://open.spotify.com/embed/album/1un51q3AMPtVtbIEfhNdBD?utm_source=generator" />
            <div>
                <h2>Commissions are Officially Open!</h2>
                <p>
                    <a className='ContactMeLink'><Link to="/contact">Contact Me</Link></a>here or on <a href='https://linktr.ee/Jaweazy' target='_blank' rel="noopener noreferrer">my other socials</a> for
                    any inquiries and continue to check this
                    page for more updates in the future!
                </p>
            </div>
        </div>
    );
    };

export default News;