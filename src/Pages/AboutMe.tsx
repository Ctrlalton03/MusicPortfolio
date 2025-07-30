import '../Css/AboutPage.css';
import { Link } from 'react-router-dom';


const AboutMe = () => {
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
                <div className="VisionCard">
                    
                </div>
                
            </div>
            
        </div>
    )
};

export default AboutMe;