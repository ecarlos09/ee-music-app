import React, { useState } from 'react';

import { LikeButton } from '..';

const Artists = () => {
    const [artist, setArtist] = useState([
        { name: "Josh Groban", link: "https://www.youtube.com/channel/UCIzJyWKY_d3540fhUa2eJUA" },
        { name: "Journey", link: "https://www.youtube.com/watch?v=fTkHFQC3wow&list=RDEMaN44Jp63Y-AyoHV9WoMk6g&start_radio=1" },
        { name: "Queen", link: "https://www.youtube.com/channel/UCiMhD4jzUqG-IgPzUmmytRQ" }
    ])

    const renderRows = () => {
        return artist.map(a => (
            <tr>
                <td>{a.name}</td>
                <td><a href={a.link}>Link</a></td>
                <td><LikeButton /></td>
                <td><button>Show singles</button></td>
            </tr>                
        ));
    };

    return (
        <table style = {{border: "1px solid black", width:"100vw", textAlign: "center"}}>
            <thead style = {{color: "white", backgroundColor:"grey"}}>
                <tr>
                    <th>Artist</th>
                    <th>YouTube content</th>
                    <th>Lookin' and likin'?</th>
                    <th>Singles</th>
                </tr>
            </thead>
            <tbody>
                { renderRows() }
            </tbody>
        </table>
    );
};

export default Artists;