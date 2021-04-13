import React, { useState } from 'react';

import { LikeButton } from '..';

const Singles = () => {
    const [single, setSingle] = useState([
        { title: "To Where You Are", artist: "Josh Groban", video: "https://www.youtube.com/watch?v=PXnKt3Wclzo" },
        { title: "Bridge Over Troubled Water", artist: "Josh Groban", video: "https://www.youtube.com/watch?v=utTYvc2XsLY" },
        { title: "Don't Stop Believin'", artist: "Journey", video: "https://www.youtube.com/watch?v=1k8craCGpgs" },
        { title: "Faithfully", artist: "Journey", video: "https://www.youtube.com/watch?v=OMD8hBsA-RI" },
        { title: "Bohemian Rhapsody", artist: "Queen", video: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ" },
        { title: "Don't Stop Me Now", artist: "Queen", video: "https://www.youtube.com/watch?v=HgzGwKwLmgM" }        
    ])

    const renderSingles = () => {
        return (
            single.map(s => (
                <li>
                    <i class="fas fa-compact-disc"></i> {s.title} 
                    <i class="fas fa-portrait"></i> {s.artist} 
                    <a href={s.video}><i class="fab fa-youtube"></i></a> 
                    <LikeButton />
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