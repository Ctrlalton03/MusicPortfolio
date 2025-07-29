import "../Css/SpotifyPlayer.css";

const SpotifyPlayer = ({SpotifyPlaylistUrl}: {SpotifyPlaylistUrl : string}) => {


    return (
        <div className="Spotify-player">
            <div className="Playlist-Container">
                <iframe
                    style={{ borderRadius: "12px" }}
                    src={SpotifyPlaylistUrl}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )

}

export default SpotifyPlayer;