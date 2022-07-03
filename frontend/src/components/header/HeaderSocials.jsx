import React from 'react'
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { SiHackthebox } from 'react-icons/si';

export const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/waseem-albaba-oscp-6a361b1b9" target="_blank"><FiLinkedin /></a>
            <a href="https://github.com/gerbsec" target="_blank"><FiGithub /></a>
            <a href="https://twitter.com/gerbsec" target="_blank"><FiTwitter /></a>
            <a href="https://app.hackthebox.com/users/357009" target="_blank"><SiHackthebox /></a>
        </div>
    )
}

export default HeaderSocials;
