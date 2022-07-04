import React from 'react';
import './footer.css';
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { SiHackthebox } from 'react-icons/si';

export const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>gerbsec</a>

            <ul className='permalinks'>
                <li><a href="/#">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#experience">Experience</a></li>
                <li><a href="/#writeups">Writeups</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/waseem-albaba-oscp-6a361b1b9" target="_blank"><FiLinkedin /></a>
                <a href="https://github.com/gerbsec" target="_blank"><FiGithub /></a>
                <a href="https://twitter.com/gerbsec" target="_blank"><FiTwitter /></a>
                <a href="https://app.hackthebox.com/users/357009" target="_blank"><SiHackthebox /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; gerbsec. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer;