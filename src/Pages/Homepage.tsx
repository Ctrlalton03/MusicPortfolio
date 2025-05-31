import {useEffect, useState} from 'react';
import MusicPlayerCard from '../Components/MusicCard';
import '../Css/home.css';
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
    const songs = [
        {
            title: "In Between Things",
            artist: "Jawaezy",
            albumArt: "../Images/Song_1.jpg",
            audioSrc: "../Songs/Inbetweenthingy.wav",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "ColorThingy2",
            artist: "Jawaezy",
            albumArt: "../Images/Song_2.png",
            audioSrc : "../Songs/colorthingy2.wav",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "encountrerrthingy",
            artist: "Jawaezy",
            albumArt: "../Images/Song_3.jpg",
            audioSrc: "../Songs/encountrerrthingye.wav",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Epicthingy",
            artist: "Jawaezy",
            albumArt: "../Images/Song_4.png",
            audioSrc: "../Songs/Epicthingy.wav",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "DamnIneedTrillian",
            artist: "Jawaezy",
            albumArt: "../Images/song_5.png",
            audioSrc: "../Songs/DamnIneedTrillian.wav",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const handleNext = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length); // Loop back to the first song after the last
    };
    const handlePrev = () => {
        setCurrentSongIndex((prevIndex) =>
            prevIndex === 0 ? songs.length - 1 : prevIndex - 1
        ); // Loop to the last song if at the first
    };

    const currentSong = songs[currentSongIndex];
    
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

    const handleDescriptionToggle = () => {
        setIsDescriptionOpen(prev => !prev);
    }


    useEffect(() => {
        AOS.init({duration: 1000, once: true});
    }, []);


    return (

        <div className='HomepageContainer' data-aos="fade-up">
            <h1>Composer/Arranger and Music Production Professional</h1>
            <section className='musicContainer'>
                <div className= {`MusicPlayerContainer ${isDescriptionOpen ? 'shifted' : ''}`}>
                    <MusicPlayerCard
                        title={currentSong.title}
                        artist={currentSong.artist}
                        albumArt={currentSong.albumArt}
                        audioSrc={currentSong.audioSrc}
                        description={currentSong.description}
                        showDescription={isDescriptionOpen}
                        onToggleDescription={handleDescriptionToggle}
                        onNext={handleNext}
                        onPrev={handlePrev}
                    />
                </div>

                <div className={`description_container ${isDescriptionOpen ? 'open' : ''}`}>
                    {isDescriptionOpen && (
                        <div className="DescriptionPreview">
                            <h2 className="text-lg font-bold">{currentSong.title}</h2>
                            <p>{currentSong.description}</p>
                        </div>
                    )}
                </div>
                
            </section>
        </div>
    );
};
export default HomePage;