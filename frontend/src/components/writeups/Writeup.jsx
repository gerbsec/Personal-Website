import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import apiclient from '../../utils/apiclient';
import './writeup.css';

// Stolen directly from: https://stackoverflow.com/a/16245768
const b64toBlob = (b64Data, contentType = 'image/png', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
}

function Writeup() {
    const { title } = useParams();
    const [post, setPost] = useState('');
    const fetchData = async () => {
        const data = await apiclient.get_one(title);
        const pattern = /src="(.*?)"/g

        const converted = data.html.replace(pattern, (_match, imgPath, _) => {
            let b64 = data.matched[imgPath]
            const blob = b64toBlob(b64)
            const blobUrl = URL.createObjectURL(blob);
            return `className="writeup__image" src="${blobUrl}"`
        });

        setPost(converted);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='writeup_page_middle' dangerouslySetInnerHTML={{ __html: post }} />

        // <div>{post}</div>
    );
}

export default Writeup;