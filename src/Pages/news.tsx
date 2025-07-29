import '../Css/News.css';
import SpotifyPlayer from '../Components/SpotifyPlayer';


const News = () => {
    return (
        <div className='NewsContainer'>
            <h1>News and Events</h1>
            <p>Check back soon for updates!</p>
            <SpotifyPlayer SpotifyPlaylistUrl="https://open.spotify.com/embed/album/1un51q3AMPtVtbIEfhNdBD?utm_source=generator" />
        </div>
    );
    };

export default News;