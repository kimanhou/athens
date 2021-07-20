import React from 'react';
import './Food.scss';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import FoodPlaceModel from '../../../model/FoodPlace';
import FoodPlace from './FoodPlace/FoodPlace';

const Food : React.FC = props => {
    const foodPlaces = FoodPlaceModel.getAllFoodPlaces();

    return (
        <section className={`food content-wrapper`}>
            <Navigation />
            <h1 className={`food-title`}>Food</h1>
            
            {foodPlaces.map(t => <FoodPlace foodPlace={t}/>)}

            <Footer/>
        </section>
    );
}

export default Food;