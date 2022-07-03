import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import ReactMarkdown from 'react-markdown';

function Writeup () {
    const {title} = useParams();
    const [post, setPost] = useState('');

    useEffect(() => {
        import (`./markdown/${title}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res));
            })
            .catch(err => console.log(err));
    });
    return (
        <div>
            <ReactMarkdown
                children={post}
                />
        </div>
    );
}

export default Writeup;