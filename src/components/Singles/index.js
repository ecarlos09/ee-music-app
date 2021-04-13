import React, { useState } from 'react';

const Singles = () => {
    const [single, setSingle] = useState([
        { title: "To Where You Are", artist: "Josh Groban", video: "https://www.youtube.com/watch?v=PXnKt3Wclzo", liked: false },
        { title: "Bridge Over Troubled Water", artist: "Josh Groban", video: "https://www.youtube.com/watch?v=utTYvc2XsLY", liked: false },
        { title: "Don't Stop Believin'", artist: "Journey", video: "https://www.youtube.com/watch?v=1k8craCGpgs", liked: false },
        { title: "Faithfully", artist: "Journey", video: "https://www.youtube.com/watch?v=OMD8hBsA-RI", liked: false },
        { title: "Bohemian Rhapsody", artist: "Queen", video: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ", liked: false },
        { title: "Don't Stop Me Now", artist: "Queen", video: "https://www.youtube.com/watch?v=HgzGwKwLmgM", liked: false }        
    ])

    const renderSingles = () => {
        return (
            single.map(s => (
                <li>
                    Title: {s.title} Artist: {s.artist} <a href={s.video}>Video!</a>
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