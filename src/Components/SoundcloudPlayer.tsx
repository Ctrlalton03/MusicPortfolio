import '../Css/MusicPlaylist.css'

const SoundcloudPlayer = ({playlistUrl}) => {

    const encodedUrl = encodeURIComponent(playlistUrl);

    return(
        <>
        <div className="Soundcloud-player">
           <div className="Playlist-Container">
            <iframe 
                width="100%" 
                height="450"
                frameBorder="no" 
                scrolling="no" 
                allow="autoplay" 
                src={`https://w.soundcloud.com/player/?url=${encodedUrl}&color=%23e40e10&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"`}
            ></iframe>
           </div>
        </div>
        </>
    )

}

export default SoundcloudPlayer