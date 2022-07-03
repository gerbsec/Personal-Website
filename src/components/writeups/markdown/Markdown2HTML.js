import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';

function Markdown2HTML () {
    const file_name = 'Timelapse.md';
    const [post, setPost] = useState('');

    useEffect(() => {
        import (`/${file_name}`)
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

export default Markdown2HTML;