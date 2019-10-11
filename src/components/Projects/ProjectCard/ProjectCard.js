import React from 'react';
import './ProjectCard.css';

class ProjectCard extends React.Component {
    static defaultProps = {
        demoLink: '',
        codeLink: '',
        icons: [],
        image: '',
        title: '',
        description: '',
    }
    render() {
        const { demoLink, codeLink,icons, image, title, description } = this.props
        return (
            <section className='project-card'>
                <div className="project-description">
                    <h2>{title}</h2>
                    <div className="project-card-block">
                        <img src={image} alt={`${title} project`} />
                    </div>
                    <div className="project-icons">
                        {icons}
                    </div>
                    <p>{description}</p>
                    <button><a target="_blank" rel="noopener noreferrer" href={codeLink}>Code</a></button>
                    <button><a target="_blank" rel="noopener noreferrer" href={demoLink}>Demo</a></button>
                </div>
            </section> 
        )
    }
}

export default ProjectCard;