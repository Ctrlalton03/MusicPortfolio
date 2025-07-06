import '../Css/MusicPage.css';
import SoundcloudPlayer from '../Components/SoundcloudPlayer';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";





const MusicPage = () => {
    
    const playlist = [
        'api.soundcloud.com/playlists/1984421308%3Fsecret_token%3Ds-HZ99sisrLTY',
        'api.soundcloud.com/playlists/1984423800%3Fsecret_token%3Ds-hFevC7sJXbU',
        'api.soundcloud.com/playlists/1984423180%3Fsecret_token%3Ds-QXqfDQYu6Ix',
        'api.soundcloud.com/playlists/1984421960%3Fsecret_token%3Ds-WjF1FejxzlG',
        'api.soundcloud.com/playlists/2019467379%3Fsecret_token%3Ds-e7Foi5QoqmW',
        'api.soundcloud.com/playlists/1984344572%3Fsecret_token%3Ds-BoslJCZzz97'
    ]


    const playlistNames = [
        'Ambient / Background Tracks',
        'Orchestral / Classical / Cinematic Tracks',
        'Battle / Encounter VGM Tracks',
        'Retro / 8-bit / 16-bit Style Tracks',
        'Jazz / Blues / Etc. Tracks',
        'VGM Mashups / Recreated Tracks'
    ]

    useEffect(() => {
        AOS.init({duration: 1000, once: true});
    }, []);

    return (
        <div>
            
            <main>
                < div className='Container' data-aos="fade-up">      
                <div className='playlist-mapping-container'>
                    <h1>Discography</h1>
                    {playlist.map((url, index) => (
                        <div key={index}>
                            <h2>{playlistNames[index]}</h2>
                            <SoundcloudPlayer key={index} playlistUrl={url} />
                        </div>
                    ))}

                </div>
                </div> 
            </main>            
        </div>
    );
    };

export default MusicPage;