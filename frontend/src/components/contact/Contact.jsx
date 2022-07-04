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
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>dummyemail@gmail.com</h5> 
                        <a href="mailto:dummyemail@gmail.com" target="_blank">Send a message!</a>
                    </article>
                    <article className='contact__option'>
                        <FiTwitter className='contact__option-icon'/>
                        <h4>Twitter</h4>
                        <h5>gerbsec</h5> 
                        <a href="https://twitter.com/gerbsec" target="_blank">Send a message!</a>
                    </article>
                    <article className='contact__option'>
                        <FiLinkedin className='contact__option-icon'/>
                        <h4>LinkedIn</h4>
                        <h5>Waseem Albaba</h5> 
                        <a href="https://www.linkedin.com/in/waseem-albaba-oscp-6a361b1b9" target="_blank">Send a message!</a>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Contact;