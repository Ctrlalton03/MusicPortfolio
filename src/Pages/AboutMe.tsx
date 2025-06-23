import '../Css/AboutPage.css';


const AboutMe = () => {
    return (
        <div className="AboutPageContainer">
            <div className="introductionContainer">
                <h1>About Me</h1>
                <div className="IntroContent">
                    <div className="imageContainer">
                        <p>Pic</p>
                    </div>
                    <p>
                        Hey, I'm Jaweazy – a passionate musician, producer/composer, 
                        and sound designer with years of experience crafting immersive 
                        soundscapes. My love for audio spans across various genres, 
                        and my work has been featured in video games, films, and more. 
                        Whether it's creating a unique track, designing sounds that tell 
                        a story, or composing music for different media, I'm all about 
                        pushing boundaries and experimenting with new ideas.
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