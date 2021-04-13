import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Single } from '..'

const Lyrics = ({ artist, title }) => {
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
        </div>
    )
}

export default Lyrics;