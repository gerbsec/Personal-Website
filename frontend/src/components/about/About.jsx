import React from 'react';
import './about.css';
import { FaFontAwesomeFlag } from 'react-icons/fa';
import { VscTerminalBash } from 'react-icons/vsc';
import { MdSecurity } from 'react-icons/md';
import { SiHackaday, SiVirustotal } from 'react-icons/si';


export const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <div className="container about__contiainer">
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <MdSecurity className='about__icon' />
                            <h5>Security Engineer</h5>
                            <small>Intern at <a href="https://prelude.org" className='link'>Prelude</a></small>
                        </article>

                        <article className='about__card'>
                            <VscTerminalBash className='about__icon' />
                            <h5>Scripting Wizard</h5>
                            <small>Bash, Python, PowerShell, JavaScript</small>
                        </article>

                        <article className='about__card'>
                            <SiHackaday className='about__icon' />
                            <h5>Penetration Tester</h5>
                            <small><a href="https://www.credential.net/aaf2c998-78c4-4714-add1-7185a3602a91" className="link">OSCP</a> Certified</small>
                        </article>

                        <article className='about__card'>
                            <FaFontAwesomeFlag className='about__icon' />
                            <h5>CTF Player</h5>
                            <small>President of the world renowned CTF team: Whitehatters</small>
                        </article>

                        <article className='about__card'>
                            <SiVirustotal className='about__icon' />
                            <h5>Malware Dev</h5>
                            <small>I write malware sometimes</small>
                        </article>
                    </div>
                    <p>
                        Hello, my name is Waseem Albaba, and I go by the handle gerbsec. I am a highly motivated security engineer with extensive knowledge
                        of penetration testing methodologies and the MITRE att&ck framework.
                        I love CTFs so much that I am president of my university team, <a href="https://www.linkedin.com/company/wcscusf">WCSC</a> @ USF. Please have a look at my work!
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;