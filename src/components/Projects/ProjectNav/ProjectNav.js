import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectNav.css';

class ProjectNav extends React.Component {
    state = {
        projects: ['goala', 'facejams', 'fridge_friend', 'egg_quiz'],
    }
    render() {
        let { projects } = this.state
        const { view } = this.props
        let links = projects.map(link => {
            if (view === 'goala' && link === 'goala') {
                return (
                    <Link 
                        className='project-nav-link project-active project-active-left'
                        onClick={() => this.props.setView(link)}
                        key={link} 
                        to={`/projects/${link}`}>
                        {link.split('_').map(word => (word[0].toUpperCase() + word.slice(1, word.length))).join(' ')}
                    </Link>
            
            )}
            if (link === view) {
                return (
                <Link 
                    className='project-nav-link project-active'
                    onClick={() => this.props.setView(link)}
                    key={link} 
                    to={`/projects/${link}`}>
                    {link.split('_').map(word => (word[0].toUpperCase() + word.slice(1, word.length))).join(' ')}
                </Link>
            )} else {
                return (
                <Link 
                    className='project-nav-link'
                    onClick={() => this.props.setView(link)}
                    key={link} 
                    to={`/projects/${link}`}>
                    {link.split('_').map(word => (word[0].toUpperCase() + word.slice(1, word.length))).join(' ')}
                </Link>
            )}
        })
        return (
            <header className='project-navigation' role="banner">
                {links}
            </header> 
        )
    }
}

export default ProjectNav;