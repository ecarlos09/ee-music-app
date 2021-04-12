import React, { useState } from 'react';

const Artists = () => {
    const [artist, setArtist ] = useState([
        { name: "Josh Groban", link: "https://www.youtube.com/channel/UCIzJyWKY_d3540fhUa2eJUA" },
        { name: "Journey", link: "https://www.youtube.com/watch?v=fTkHFQC3wow&list=RDEMaN44Jp63Y-AyoHV9WoMk6g&start_radio=1" },
        { name: "Queen", link: "https://www.youtube.com/channel/UCiMhD4jzUqG-IgPzUmmytRQ" }
    ])

    const renderRows = () => {
        return artist.map(a => {
            <tr>
                <td>a.name</td>
                <td>a.link</td>
            </tr>
        })
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Youtube content</th>
                </tr>
            </thead>
            <tbody>
                { renderRows() }
            </tbody>
        </table>
    );
};

export default Artists;