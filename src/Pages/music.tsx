import '../Css/MusicPage.css';
import {useState} from 'react';

const musicData = [
{id: 1, title: "Everything", artist: "Joel L.", albumArt: "../Images/Song_1.jpg", genre: 'Rock'},
{id: 2, title: "Life's Feast", artist: "Joel L.", albumArt: "https://via.placeholder.com/300x300", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", genre: 'Rock'},
{id: 3, title: "Everything", artist: "Joel L.", albumArt: "https://via.placeholder.com/300x300", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", genre: 'Pop'},
{id: 4, title: "BoomBaby", artist: "Joel L.", albumArt: "https://via.placeholder.com/300x300", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", genre: 'Rock'},
{id: 5, title: "Everything", artist: "Joel L.", albumArt: "https://via.placeholder.com/300x300", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", genre: 'Cyberpunk'},
{id: 6, title: "Everything", artist: "Joel L.", albumArt: "https://via.placeholder.com/300x300", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", genre: 'Rock'},

];






const MusicPage = () => {

    const [songs, setSongs] = useState([])

    const [searchTerm, setSearchTerm] = useState('');
    const [genre, setGenre] = useState('');

    const filteredMusic = musicData.filter((song => song.title.
        toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) &&
           (genre === '' || song.genre === genre)  ) ) ;

    return (
        <div>
            <header>
                <h1>My Music List</h1>
            </header>
            <main>
                <h2>
                    Music Library    
                </h2>
                < div className='Container'>
                    
                    <div className='SearchbarContainer'>
                        <input 
                        type='text'
                        placeholder='Search for a song'
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        className='searchBar'
                        />
                        <select 
                        value={genre}
                        className='genreSelect'
                        onChange={(event) => setGenre(event.target.value)}
                        >
                            <option value=''>All Genres</option>
                            <option value='Rock'>Rock</option>
                            <option value='Pop'>Pop</option>
                            <option value='Cyberpunk'>Cyberpunk</option>
                        </select>
                        <ul className='musicListSide'>
                        {filteredMusic.map(song => (
                            <li key={song.id}  className='musicItemSide'>
                                <h3>{song.title}</h3>
                                <h4>{song.artist}</h4>
                                <p>{song.genre}</p>
                            </li>
                        ))}
                    </ul>
                    </div>
                    <ul className='musicList'>
                        {filteredMusic.map(song => (
                            <li key={song.id}  className='musicItem'>
                                <img src={song.albumArt} alt={song.title} />
                                <h3>{song.title}</h3>
                                <h4>{song.artist}</h4>
                                <p>{song.genre}</p>
                            </li>
                        ))}
                    </ul>

                    {filteredMusic.length === 0 && <p className="NoSongsText">No songs found</p>}
                    
                    

                </div>    
            </main>            
        </div>
    );
    };

export default MusicPage;