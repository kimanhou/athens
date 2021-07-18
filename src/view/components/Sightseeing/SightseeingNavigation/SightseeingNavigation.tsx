import React from 'react';
import './SightseeingNavigation.scss';

interface ISightseeingNavigation {
    title : string;
    activeClassname : string;
    setCurrentSection : () => void;
}

const SightseeingNavigation : React.FC<ISightseeingNavigation> = props => {
    return (
        <div className={`sightseeing-navigation ${props.activeClassname}`} onClick={props.setCurrentSection} >
            {props.title}
            <div className={`underline`}></div>
        </div>
    );
}

export default SightseeingNavigation;