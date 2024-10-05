import {useState} from 'react';
import MusicPlayerCard from '../Components/MusicCard';
import '../Css/home.css';

const HomePage = () => {
    const songs = [
        {
            title: "In Between Things",
            artist: "Jawaezy",
            albumArt: "../Images/Song_1.jpg",
            audioSrc: "../Songs/Inbetweenthingy.wav",
            description: "Description for Song 1, Welcome to my music page! This is just PlaceHolder Text for now."
        },
        {
            title: "Song 2",
            artist: "Joel L.",
            albumArt: "https://via.placeholder.com/300x300",
            audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            description: "Description for Song 2"
        },
        {
            title: "Song 3",
            artist: "Joel L.",
            albumArt: "https://via.placeholder.com/300x300",
            audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            description: "Description for Song 3"
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

    return (

        <div className='HomepageContainer'>
            <h1>Experience Unique Beats and Rhythms by Joel L.</h1>
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