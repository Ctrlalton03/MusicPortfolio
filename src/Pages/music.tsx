import '../Css/MusicPage.css';
import {useState} from 'react';

const musicData = [
{id: 1, title: "In Between Things", artist: "Joel L.", albumArt: "../Images/Song_1.jpg", genre: 'Rock', Year: '2024'},
{id: 2, title: "colorthingy2", artist: "Joel L.", albumArt: "../Images/Song_2.png", genre: 'other', Year: '2024'},
{id: 3, title: "encountrerrthingye", artist: "Joel L.", albumArt: "../Images/Song_3.jpg", genre: 'Vgm', Year: '2024'},
{id: 4, title: "Epicthingy", artist: "Joel L.", albumArt: "../Images/Song_4.png", genre: 'Orchestral', Year: '2024'},
{id: 5, title: "DamnIneedTrillian", artist: "Joel L.", albumArt: "../Images/song_5.png", genre: 'Jazz', Year: '2024'},
{id: 6, title: "Everything", artist: "Joel L.", albumArt: "https://via.placeholder.com/300x300", genre: 'Rock', Year: '2024'},

];






const MusicPage = () => {

    const genres= ['Rock', 'CyberPunk', 'Pop']

    const [searchTerm, setSearchTerm] = useState('');
    const [genre, setGenre] = useState('');

    const filteredMusic = musicData.filter((song => song.title.
        toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) &&
           (genre === '' || song.genre === genre)  ) ) ;

    return (
        <div>
            
            <main>
                < div className='Container'>
                    
                    <div className='SearchbarContainer'>
                        <h3>Filters</h3>
                        <input 
                        type='text'
                        placeholder='Search for a song'
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        className='searchBar'
                        />
                        <div className='GenreFilter'>

                            <button 
                                className={`genreButton ${genre === '' ? 'selected' : ''}`}
                                onClick={() => setGenre('')}
                            >
                                All Music
                            </button>

                            {genres.map((genre) => ( 
                                <button
                                key={genre}
                                className={`genreButton ${genre === genre ? 'selected' : ''}`}
                                onClick={() => setGenre(genre)}
                                >

                                {genre}
                                </button>
                            ))}
                            
                        
                        </div>
                        
                    </div>
                    <div className='MusicListContentContainer'>
                        <h1>MUSIC HEADER</h1>
                        <ul className='musicList'>
                            {filteredMusic.map(song => (
                                <li key={song.id}  className='musicItem'>
                                    <img src={song.albumArt} alt={song.title} />
                                    <div className='musicItemContent'>
                                        <h3>{song.title}</h3>
                                        <p>{song.Year}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {filteredMusic.length === 0 && <p className="NoSongsText">No songs found</p>}
                    
                    </div>
                   
                    

                </div>    
            </main>            
        </div>
    );
    };

export default MusicPage;