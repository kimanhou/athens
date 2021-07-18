import React from 'react';
import './Neighborhoods.scss';
import wip from '../../../../images/under-construction.png';

const Neighborhoods : React.FC = props => {
    return (
        <div className={`neighborhoods`}>
            <h1>WORK IN PROGRESS</h1>
            <img src={wip} alt='Work in progress illustration'/>
        </div>
    );
}

export default Neighborhoods;