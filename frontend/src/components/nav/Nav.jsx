import React from 'react'
import './nav.css';
import { FiHome, FiUser, FiPenTool } from 'react-icons/fi';
import { TiDocumentText, TiContacts } from 'react-icons/ti';
import { useState } from 'react';

export const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FiHome /></a>
            <a href="/#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser /></a>
            <a href="/#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FiPenTool /></a>
            <a href="/#writeups" onClick={() => setActiveNav('#writeups')} className={activeNav === '#writeups' ? 'active' : ''}><TiDocumentText /></a>
            <a href="/#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiContacts /></a>
        </nav>
    )
}

export default Nav;
