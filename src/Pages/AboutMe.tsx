import ProjectCovers from '../Components/ProjectCovers';
import '../Css/AboutPage.css';
import { Link } from 'react-router-dom';
import Piracy from '../assets/Piracy.png';
import Megalovania from '../assets/megalovania.png';
import Spy from '../assets/Spy.png';


const AboutMe = () => {

    
    const projects = [
        {
            id: 1,
            title: "Piracy on the New Frontier (2025)",
            image: Piracy,
            description1: "A retro space trading game inspired by 'Taipan!'",
            description2: "In 'Piracy on the New Frontier', players explore the galaxy as spacefaring pirates, battling enemies, trading goods, and completing various missions. I composed the entire soundtrack using only the Microsoft GS Wavetable Synth (the default midi playback soundset). This gave the music a nostalgic, old-PC feel with instruments any Windows machine can run. The game will be available to download from spacefreighterone.com later this year, alongside a companion book outlining the game's code and development process. The book will also contain sheet music for the whole soundtrack, and links to the MIDI and MP3 files — perfect for anyone interested in the music or developing this sort of game",
            link: "https://www.spacefreighter.one/"
        },
        {
            id: 2,
            title: "MEGALOVANIA but it's 'Take Over' from Persona 5 Royal (ft. KinZoku)",
            image: Megalovania,
            description1: " This was my first time collaborating with another composer. We mashed up two crazy songs to make one remix that’s both a bad time and a banger. The song is out on all streaming platforms, so go check it out! ",
            description2: "You can also find KinZoku's work here!",
            link: " https://www.youtube.com/watch?v=RFlTrWx0h1k" 
        },
        {
            id: 3,
            title: "Untitled Project Inspired by 'Spy vs. Spy (2005)'",
            image: Spy,
            description1: " This indie game started as a passion project of a solo developer attempting to remake Spy vs. Spy in Unity with improved mechanics. Now it's on its way to becoming a unique title with original assets and a growing community supporting it via Patreon and Discord.",
            description2: " The Spy vs. Spy soundtrack consisted of songs by the jazz/lounge band 'Combustible Edison'. I’ve composed two tracks for this soundtrack so far, aiming to capture the sleek, cartoonish mayhem that made the original so iconic.",
            link: "https://www.youtube.com/@thatguy5028"
        }
    ];

    return (
        <div className="AboutPageContainer">
            <div className="introductionContainer">
                <h1>About Me</h1>
                <div className="IntroContent">
                    <p>
                        Hello! I'm Jaweazy: a professional composer, producer, and sound designer. I create music and
                        sound effects for games, film, and other media, bringing stories to life through audio.
                    </p>
                    <p>
                        I've been making music in some form for over a decade. I began with band and choir, and
                        eventually found myself performing, teaching, and producing in more professional spaces. Along
                        the way, I began making original tracks, remixes, and SFX for various projects. I honed my skills
                        across several styles and genres, including 8/16-bit music, orchestral, jazz, rock, hip hop, and more
                        while contributing to indie games, short films, videos, and personal commissions.
                    </p>
                    <p>
                        I'm constantly looking to refine my craft and master everything I come across. Whether you need
                        an 8-bit loop, a cinematic orchestra, or ambient sounds, feel free to <a><Link to="/contact">contact me!</Link></a> 
                    </p>
                </div>
               
            </div>
            <div className="ContainerSecondSection">
                <h1 className='VisionHeader'>Projects & Collaborations</h1>
                <div className="ProjectsContainer">
                    <ProjectCovers projects={projects} />
                </div>
                
            </div>
            
        </div>
    )
};

export default AboutMe;
