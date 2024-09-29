import {useState} from 'react';
import MusicPlayerCard from '../Components/MusicCard';
import '../Css/home.css';

const HomePage = () => {
    const songs = [
        {
            title: "Song 1",
            artist: "Joel L.",
            albumArt: "https://via.placeholder.com/300x300",
            audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            description: "Description for Song 1"
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
    


    return (

        <div className='HomepageContainer'>
            <h1>Experience Unique Beats and Rhythms by Joel L.</h1>
            <section className='musicContainer'>
                <div className='MusicPlayerContainer'>
                    <MusicPlayerCard
                        
                        title={currentSong.title}
                        artist={currentSong.artist}
                        albumArt={currentSong.albumArt}
                        audioSrc={currentSong.audioSrc}
                        description={currentSong.description}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        
                    />
                </div>
                <div className='PlaylistContainer'>
                    
                </div>
                
                
            </section>
        </div>
    )
}

export default HomePage;