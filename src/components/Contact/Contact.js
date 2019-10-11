import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io'

class Contact extends React.Component {
    render() {
        return (
            <section className='contact' id='contact'>
                <div className="contact-text">
                    <h2>Contact Me!</h2>
                    <p>You can reach me here:</p>
                    <div className="contact-links">
                    <a href="https://github.com/CodeChung/" rel="noopener noreferrer" target="_blank">
                        <FaGithub />
                    </a>
                    <a href="mailto:hc9825@gmail.com">
                        <IoMdMail />
                    </a>
                    <a href="https://www.linkedin.com/in/harry-h-chung/" rel="noopener noreferrer" target="_blank">
                        <FaLinkedin />
                    </a>
                    </div>                    
              </div>
            </section>
        )
    }
}

export default Contact;