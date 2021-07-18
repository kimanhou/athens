import React from 'react';
import './Before.scss';
import CheckList from './CheckList/CheckList';
import FromAirport from './FromAirport/FromAirport';
import metroMap from '../../../images/metro-map.png';
import UsefulLinks from './UsefulLinks/UsefulLinks';

interface IBeforeProps {

}

const Before : React.FC<IBeforeProps> = props => {
    return (
        <section className={`before`}>
            <CheckList/>
            <FromAirport />
            <UsefulLinks />
            <img src={metroMap} alt='Metro map of Athens' className={`metro-map`}></img>
        </section>
    );
}

export default Before;