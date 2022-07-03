import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './writeups.css';
import apiClient from "../../utils/apiclient";


export const Writeups = ({ limit }) => {
    const [data, setData] = useState([])
    const fetchData = async () => {

        if (limit) {
            setData(await apiClient.get_recent(limit));
        } else {
            setData(await apiClient.get_all());
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section id='writeups'>
            <h5>Recent work</h5>
            <h2>Writeups</h2>

            <div className='center'>
                <Link to="/writeups" className='btn'>View All</Link>
            </div>

            <div className="container portfolio__container">
                {
                    data.map(({ title, image }) => {
                        return (
                            <article key={title} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={`data:image/png;base64,${image}`} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <Link to={`/writeups/${title}`} className='btn btn-primary'>Check it out!</Link>
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