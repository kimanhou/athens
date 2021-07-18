import React from 'react';
import './FromAirportIllustration.scss';
import FromAirportIllustrationDot from './FromAirportIllustrationDot';
import metro from '../../../../images/metro.png';
import bus from '../../../../images/bus.png';

const FromAirportIllustration : React.FC = props => {
    return (
        <div className={`from-airport-illustration`}>
            <FromAirportIllustrationDot title='AIRPORT' />
            <div className={`from-airport-illustration-part one`}>
                <div className={`from-airport-illustration-part-option metro-3`}>
                    <img className={`metro transport`} src={metro} alt='Option 1 : Metro M3'/>
                </div>
                <div className={`from-airport-illustration-part-option-divider`}></div>
                <div className={`from-airport-illustration-part-option bus-x95`}>
                    <img className={`bus transport`} src={bus} alt='Option 2 : Bus X95'/>
                </div>
            </div>
            <FromAirportIllustrationDot title='SYNTAGMA' />
            <div className={`from-airport-illustration-part two`}>
                <div className={`from-airport-illustration-part-option omania`}>
                    <div className={`left metro-2`}>
                        <img className={`metro transport`} src={metro} alt='Option 1 : Metro M2'/>
                    </div>
                    <FromAirportIllustrationDot title='OMANIA' small />
                    <div className={`right walk-from-omania`}>
                        <div className="walk-container">
                            <div className="walk"></div>
                        </div>
                    </div>
                </div>
                <div className={`from-airport-illustration-part-option-divider`}></div>
                <div className={`from-airport-illustration-part-option two`}>
                    <div className="walk-container">
                        <div className="walk"></div>
                    </div>
                </div>
            </div>
            <FromAirportIllustrationDot title='AIRBNB' />
        </div>
    );
}

export default FromAirportIllustration;