import React from 'react';
import './Intro.css';
import intro from './img/intro.png';
class Intro extends React.Component {
    render() {
        return (
            <section className='intro' id='intro'>
                <img className='face-pic' src={intro} alt='Harry' />
                <h2> Hi there, I’m Harry. I’m a web developer based in <br /> Los Angeles, CA.</h2>
            </section>
        )
    }
}

export default Intro;