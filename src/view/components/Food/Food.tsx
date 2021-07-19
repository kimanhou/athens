import React from 'react';
import './Food.scss';
import wip from '../../../images/under-construction.png';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Food : React.FC = props => {
    return (
        <section className={`food content-wrapper`}>
            <Navigation />
            <h1 className={`food-title`}>Food</h1>
            <h1>WORK IN PROGRESS</h1>
            <img src={wip} alt='Work in progress illustration'/>

            <Footer/>
        </section>
    );
}

export default Food;