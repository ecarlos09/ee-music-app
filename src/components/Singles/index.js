import React, { useState } from 'react';

import { LikeButton } from '..';
import { Lyrics } from '..';

const Singles = () => {
    const [single, setSingle] = useState([
        { id: 1, title: "To Where You Are", artist: "Josh Groban", video: "https://www.youtube.com/watch?v=PXnKt3Wclzo" },
        { id: 2, title: "Bridge Over Troubled Water", artist: "Josh Groban", video: "https://www.youtube.com/watch?v=utTYvc2XsLY" },
        { id: 3, title: "Don't Stop Believin'", artist: "Journey", video: "https://www.youtube.com/watch?v=1k8craCGpgs" },
        { id: 4, title: "Faithfully", artist: "Journey", video: "https://www.youtube.com/watch?v=OMD8hBsA-RI" },
        { id: 5, title: "Bohemian Rhapsody", artist: "Queen", video: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ" },
        { id: 6, title: "Don't Stop Me Now", artist: "Queen", video: "https://www.youtube.com/watch?v=HgzGwKwLmgM" }        
    ]);

    const [showLyrics, setShowLyrics ] = useState(false);

    const toggleLyrics = () => setShowLyrics(prevState => !prevState)

    const renderSingles = () => {
        return (
            single.map(s => (
                <li>
                    <i class="fas fa-compact-disc"></i> {s.title} 
                    <i class="fas fa-portrait"></i> {s.artist} 
                    <a href={s.video}><i class="fab fa-youtube"></i></a> 
                    <LikeButton />
                    <ul>
                        <li>
                            <p>
                                { showLyrics ? <Lyrics artist={s.artist} title={s.title} open={toggleLyrics} /> : <button onClick={toggleLyrics}>Show lyrics</button>}
                            </p>
                        </li>
                    </ul>
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