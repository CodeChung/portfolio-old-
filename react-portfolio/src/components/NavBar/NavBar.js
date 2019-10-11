import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
    state = {
        links: ['/', 'projects', 'about', 'contact'],
    }
    render() {
        let { links } = this.state
        const { view } = this.props
        links = links.map(link => {
            if (link === view || view === '/home') {
                return link !== '/' 
                    ? 
                    <Link className='current-link' key={link} to={`/${link}`}>{link[0].toUpperCase() + link.slice(1, link.length)}</Link>
                    :
                    <Link className='current-link' key={link} to='/'>Harry Chung</Link>
            } else if (link === '/') {
                return (
                <Link 
                    onClick={() => this.props.setView(link)}
                    key={link} 
                    to='/'>
                    Harry Chung
                </Link>)
            } else {
                return (
                <Link 
                    onClick={() => this.props.setView(link)}
                    key={link} 
                    to={`/${link}`}>
                    {link[0].toUpperCase() + link.slice(1, link.length)}
                </Link>
            )}
        })
        return (
            <header role="banner">
                <ul>
                    {links}
                </ul>
            </header> 
        )
    }
}

export default NavBar;