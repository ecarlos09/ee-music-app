import React, { useState } from 'react';

import { LikeButton } from '..';
import { Lyrics } from '..';

const Singles = () => {
    const [single, setSingle] = useState([
        { id: 1, title: "To Where You Are", artist: "Josh Groban", video: "https://www.youtube.com/watch?v=PXnKt3Wclzo", showLyrics: false },
        { id: 2, title: "Bridge Over Troubled Water", artist: "Josh Groban", video: "https://www.youtube.com/watch?v=utTYvc2XsLY", showLyrics: false },
        { id: 3, title: "Don't Stop Believin'", artist: "Journey", video: "https://www.youtube.com/watch?v=1k8craCGpgs", showLyrics: false },
        { id: 4, title: "Faithfully", artist: "Journey", video: "https://www.youtube.com/watch?v=OMD8hBsA-RI", showLyrics: false },
        { id: 5, title: "Bohemian Rhapsody", artist: "Queen", video: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ", showLyrics: false },
        { id: 6, title: "Don't Stop Me Now", artist: "Queen", video: "https://www.youtube.com/watch?v=HgzGwKwLmgM", showLyrics: false }        
    ]);

    const [showLyrics, setShowLyrics ] = useState(false);

    const toggleLyrics = () => setShowLyrics(prevState => !prevState)

    const renderSingles = () => {
        return (
            single.map(s => (
                <li>
                    <i className="fas fa-compact-disc"></i> {s.title} 
                    <i className="fas fa-portrait"></i> {s.artist} 
                    <a href={s.video}><i class="fab fa-youtube"></i></a> 
                    <LikeButton />
                    { showLyrics ? <Lyrics artist={s.artist} title={s.title} open={toggleLyrics} /> : <button onClick={toggleLyrics}><img src='https://i.imgur.com/nBj6dhV.jpg' style={{width: "1vw"}} /></button> }
                </li>
            )
        ));
    }

    return (
        <div id="allSingles">
            <ul>
                { renderSingles() }
            </ul>            
        </div>
    )
}

export default Singles;