import {useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2,  } from 'lucide-react';
import '../Css/MusicCard.css';

const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

interface MusicPlayerCardProps {
    title: string;
    artist: string;
    albumArt: string;
    audioSrc: string;
    description: string;
    showDescription: boolean;
    onToggleDescription: () => void;
    onNext: () => void;
    onPrev: () => void;
}

const MusicPlayerCard: React.FC<MusicPlayerCardProps> = ({ title, artist, albumArt, audioSrc, showDescription, onNext, onPrev, onToggleDescription }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const audioRef = useRef<HTMLAudioElement>(null);


    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleLoadedMetadata = () => setDuration(audio.duration);
        const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
        const handleEnded = () => setIsPlaying(false);

        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('ended', handleEnded);
        
        return () => {
            audio.removeEventListener('loadedmetadata', () => setDuration(audio.duration));
            audio.removeEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
            audio.removeEventListener('ended', () => setIsPlaying(false));
        };
    }, [audioSrc]);

    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (!audio) return;
        
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (!audio) return;
        const newTime = (event.target.valueAsNumber / 100) * duration;
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    }

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (!audio) return;
        const newVolume = event.target.valueAsNumber / 100;
        audio.volume = newVolume;
        setVolume(newVolume);
    };


    return (
        <>
        <div className='MusicCardContainer'>
            <div className='MusicCard_img_Container'>
                <img src={albumArt} alt={`${title} by ${artist} `}></img>
                <div className="NavigationButtons">
                    <button onClick={onPrev} className="mr-4 bg-gray-300 px-4 py-2 rounded">Prev</button>
                    <button onClick={onNext} className="bg-gray-300 px-4 py-2 rounded">Next</button>
                </div>
            </div>
            <div className='Card_info'>
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
                        
                    <button onClick={onToggleDescription} className="DescriptionBtn">
                        {showDescription ? "Hide Description" : "View Description"}
                    </button>
                </div>
                <audio ref={audioRef} src={audioSrc} />
                
            </div>
            
            
        </div>
        </>
        
    );
};

export default MusicPlayerCard;