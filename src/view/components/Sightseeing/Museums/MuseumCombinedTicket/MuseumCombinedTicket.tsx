import React from 'react';

const MuseumCombinedTicket : React.FC = props => {
    return (
        <div className={`museum-combined-ticket`}>
            <h3>Museum combined ticket</h3>
            <div className={`museum-combined-ticket-text`}>
                4 museums (see table below) can be visited with one combined ticket.<br></br>
                <b>Cost:</b> 15€<br></br>
                <b>Duration:</b> 3 days<br></br>
                To buy at the ticket booth of any of these museums. Valid for one entry per site.<br></br>
            </div>
        </div>
    );
}

export default MuseumCombinedTicket;