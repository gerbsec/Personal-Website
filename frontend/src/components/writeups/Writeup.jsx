import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import apiclient from '../../utils/apiclient';
import './writeup.css';

function Writeup() {
    const { title } = useParams();
    const [post, setPost] = useState('');
    const fetchData = async () => {
        setPost(await apiclient.get_one(title))
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='center' dangerouslySetInnerHTML={{__html:post}}/>

        // <div>{post}</div>
    );
}

export default Writeup;