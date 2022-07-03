import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';

function Writeup() {
    const { title } = useParams();
    const [post, setPost] = useState('');

    useEffect(() => {

    }, []);
    return (
        <div>
            <ReactMarkdown
                children={post}
            />
        </div>
    );
}

export default Writeup;