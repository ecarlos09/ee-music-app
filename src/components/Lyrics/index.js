import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Lyrics = ({ artist, title, open }) => {
    const [ lyrics, setLyrics ] = useState();

    useEffect(() => {
        const fetchLyrics = async () => {
            try {
                let { data } = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
                setLyrics(data.lyrics);
            } catch (err) {
                console.warn(err.mesage);
            }
        }
        
        fetchLyrics();

    }, [artist, title])

    return (
        <div class="lyrics">
            { lyrics }
            <span onClick={ open } style={{cursor: "pointer"}}>
                <button>x</button>
            </span>
        </div>
    )
}

export default Lyrics;