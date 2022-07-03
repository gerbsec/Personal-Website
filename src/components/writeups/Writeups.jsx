import React from 'react';
import { Link} from 'react-router-dom';
import './writeups.css';
import Data from './Data';


export const Writeups = ({limit}) => {
    return (
        <section id='writeups'>
            <h5>Recent work</h5>
            <h2>Writeups</h2>
            <Link to="/writeups" className='btn btn-primary'>Check it</Link>

            <div className="container portfolio__container">
                {
                    Data.slice(0, limit ?? Data.length).map(({ title, image, link }) => {
                        return (
                            <article key={title} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <Link to={`/writeups/${title}`} className='btn btn-primary'>{title}</Link>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Writeups;