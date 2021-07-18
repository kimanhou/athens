import React from 'react';
import './FromAirportIllustrationDot.scss';

interface IFromAirportIllustrationDotProps {
    title: string;
    small ?: boolean;
}

const FromAirportIllustrationDot : React.FC<IFromAirportIllustrationDotProps> = props => {
    const smallClassname = props.small ? 'small' : '';
    return (
        <div className={`from-aiport-illustration-dot ${smallClassname}`}>
            <div className={`title`}>
                {props.title}
            </div>
            <div className={`dot`}></div>
        </div>
    );
}

export default FromAirportIllustrationDot;