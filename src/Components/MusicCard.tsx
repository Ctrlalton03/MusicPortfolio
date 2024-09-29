import React, {useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2,  } from 'lucide-react';
import '../Css/MusicCard.css';

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const MusicPlayerCard = ({ title, artist, albumArt, audioSrc, description, onNext, onPrev }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [showDescription, setShowDescription] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
        audio.addEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
        audio.addEventListener('ended', () => setIsPlaying(false));
        
        return () => {
            audio.removeEventListener('loadedmetadata', () => setDuration(audio.duration));
            audio.removeEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
            audio.removeEventListener('ended', () => setIsPlaying(false));
        };
    }, [audioSrc]);

    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (e) => {
        const audio = audioRef.current;
        const newTime = (e.target.value / 100) * duration;
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    }

    const handleVolumeChange = (e) => {
        const audio = audioRef.current;
        const newVolume = e.target.value;
        audio.volume = newVolume;
        setVolume(newVolume);
    };


    return (
        <div className='MusicCardContainer'>
            <img src={albumArt} alt={`${title} by ${artist} `}></img>
            <div className="NavigationButtons">
                <button onClick={onPrev} className="mr-4 bg-gray-300 px-4 py-2 rounded">Prev</button>
                <button onClick={onNext} className="bg-gray-300 px-4 py-2 rounded">Next</button>
            </div>
            <h2>{title}</h2>
            <h3>{artist}</h3>
            <div className='PlaybackContainer'>
    
                    <button onClick={handlePlayPause}>
                        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </button>
                
                <div className='PlaybackControls'>
                    <span className="text-sm text-gray-600">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={(currentTime / duration) * 100 || 0}
                        onChange={handleSeek}
                        className="w-full mb-4"
                    />
                </div>
            </div>
            <div className="volumeContainer_Descriptonbtn">
                <div className='VolumeContainer'>
                    <Volume2 className="h-4 w-4 mr-2" />
                        <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume * 100}
                        onChange={handleVolumeChange}
                        className="w-24"
                    />
                </div>
                    

                <button onClick={() => setShowDescription(!showDescription)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    {showDescription ? "Hide Description" : "View Description"}
                </button>
            </div>
            <audio ref={audioRef} src={audioSrc} />
            {showDescription && (
                <div className='DescriptionComponent'>
                    <h3 className="font-bold mb-2">Description:</h3>
                    <p>{description}</p>
                </div>
            )}
            
        </div>
    );
};

export default MusicPlayerCard;