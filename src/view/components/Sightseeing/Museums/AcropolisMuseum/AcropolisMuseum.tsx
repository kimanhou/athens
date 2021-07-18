import React from 'react';

const AcropolisMuseum : React.FC = props => {
    return (
        <div className={`acropolis-museum`}>
            <h2>Acropolis Museum</h2>
            <a href='https://www.theacropolismuseum.gr/en' target='_blank' rel="noreferrer">Website</a>
            <p>
                The Acropolis Museum is NOT included in the museum combined ticket.<br></br>
                <b>Cost:</b> 10€<br></br>
                <b>Opening hours:</b> Mon 08:00 - 16:00<br></br>Tue - Sun 08:00 - 20:00<br></br>Fri 08:00 - 22:00
            </p>
            <p>
                It's a huge glass building designed to resist massive earthquakes and to display ruins discovered beneath the site during construction. 
                Maybe oversized (at least until the British Museum gives back what was stolen by Lord Elgin), this impressive building houses all the originals that are replaced by copies on the Acropolis.
            </p>
        </div>
    );
}

export default AcropolisMuseum;