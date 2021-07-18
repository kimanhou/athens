import React from 'react';
import ContentSection from '../../ContentSection/ContentSection';
import './UsefulLinks.scss';

const UsefulLinks : React.FC = props => {
    return (
        <ContentSection className={`useful-links`}>
            <h2>Useful links</h2>
            <br></br>
            <div className={`links`}>
                <p><a href='https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/grece/' target='_blank' rel="noreferrer">France Diplomatie</a></p>
                <p><a href='https://travel.gov.gr/#/' target='_blank' rel="noreferrer">Protocol for arrivals in Greece</a></p>
                <p><a href='https://www.athenstransport.com/english/tickets/' target='_blank' rel="noreferrer">Public transport in Athens</a></p>
            </div>
        </ContentSection>
    );
}

export default UsefulLinks;