import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

export const Experience = () => {
    return (
        <section id='experience'>
            <h5>My Skills</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__engineering">
                    <h3>Security Engineering && Threat Intelligence</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>Bash</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>Javascript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>Powershell</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>Adversary Research</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>Vulnerability Research</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__pentesting">
                    <h3>Penetration Testing && Red Teaming</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>Initial Access</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>Privilege Escalation</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>Active Directory</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>Web Security</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>Reverse Engineering</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icons' />
                            <div>
                                <h4>Social Engineering</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;