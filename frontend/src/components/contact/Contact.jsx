import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';

export const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <a href="mailto:albabawaseem61@gmail.com" target="_blank">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>albabawaseem61@gmail.com</h5> 
                    </article>
                    </a>
                    <a href="https://twitter.com/gerbsec" target="_blank">
                    <article className='contact__option'>
                        <FiTwitter className='contact__option-icon'/>
                        <h4>Twitter</h4>
                        <h5>gerbsec</h5> 
                    </article>
                    </a>
                    <a href="https://www.linkedin.com/in/waseem-albaba-oscp-6a361b1b9" target="_blank">
                    <article className='contact__option'>
                        <FiLinkedin className='contact__option-icon'/>
                        <h4>LinkedIn</h4>
                        <h5>Waseem Albaba</h5> 
                    </article>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;