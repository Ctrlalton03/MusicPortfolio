import {useState} from 'react';
import '../Css/ProjectCovers.css';

type Project = {
    id: number;
    title: string;
    image: string;
    description1?: string | JSX.Element;
    description2?: string | JSX.Element;
    link?: string; 
};

type ProjectCoversProps = {
    projects: Project[]; 
};  

const ProjectCovers = ({projects} : ProjectCoversProps) => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [showDescription, setShowDescription] = useState(false);

    // Get current project
    const currentProject = projects[currentProjectIndex];

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    }

    const goToNextProject = () => {
        setCurrentProjectIndex((prevIndex) => 
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
        setShowDescription(false);
    }

    const goToPreviousProject = () => {
        setCurrentProjectIndex((prevIndex) => 
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
        setShowDescription(false);
    }

    return (
        <div className="project-cover">
            {/* Project content */}
            <h2>{currentProject.title}</h2>
            
            {/* Image content */}
            <div className="image-container">
                {currentProject.link ? (
                    <a 
                        href={currentProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="image-link"
                    >
                        <img src={currentProject.image} alt={currentProject.title} />
                    </a>
                ) : (
                    <img src={currentProject.image} alt={currentProject.title} />
                )}
            </div>

            {showDescription && (
                <div className="description-container">
                    <p>{currentProject.description1}</p>
                    <p>{currentProject.description2}</p>
                </div>
            )}
            <div className="button-container">
                <button 
                    className="side-arrow left-arrow"
                    onClick={goToPreviousProject}
                    disabled={projects.length <= 1}
                    >
                    ←
                    </button>
                <button onClick={toggleDescription} className='toggle-description-button'>
                    {showDescription ? 'Hide Description' : 'Read More'}
                </button>
                <button 
                    className="side-arrow right-arrow" 
                    onClick={goToNextProject}
                    disabled={projects.length <= 1}
                >
                    →
                </button>
            </div>

            {/* Project indicators (dots) */}
            <div className="project-indicators">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator-dot ${index === currentProjectIndex ? 'active' : ''}`}
                        onClick={() => {
                            setCurrentProjectIndex(index);
                            setShowDescription(false);
                        }}
                    />
                ))}
            </div>
        </div>
    );

}

export default ProjectCovers;