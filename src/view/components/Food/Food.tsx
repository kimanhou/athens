import React, { useState } from 'react';
import './Food.scss';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import FoodPlaceModel, { FoodPlaceTag as FoodPlaceTagModel, Neighborhood } from '../../../model/FoodPlace';
import FoodPlace from './FoodPlace/FoodPlace';
import FoodPlaceTag from './FoodPlaceTag/FoodPlaceTag';

const Food : React.FC = props => {
    const foodPlaces = FoodPlaceModel.getAllFoodPlaces();
    const neighbordhoods = FoodPlaceModel.getAllFoodPlaceNeighborhoods();
    const tags = FoodPlaceModel.getAllFoodPlaceTags();

    const [ selectedNeighbordhood, setSelectedNeighbordhood ] = useState<string>(Neighborhood.ANY);
    const [ selectedTags, setSelectedTags ] = useState(tags);
    const [ tagCheapSelected, setTagCheapSelected ] = useState(true);
    const [ tagFastSelected, setTagFastSelected ] = useState(true);
    const [ tagLocalSelected, setTagLocalSelected ] = useState(true);

    const onClickSelectAllTags = () => {
        setSelectedTags(tags);
        setTagCheapSelected(true);
        setTagFastSelected(true);
        setTagLocalSelected(true);
    }

    const isIncluded = (tags : FoodPlaceTagModel[], tag : FoodPlaceTagModel) => {
        if (tags.filter(t => t === tag).length > 0) {
            return true;
        }
        return false;
    }

    const intersects = (tags1 : FoodPlaceTagModel[], tags2 : FoodPlaceTagModel[]) => {
        if (tags1.length < 1) {
            return true;
        }
        for (let t of tags1) {
            if (isIncluded(tags2, t)) {
                return true;
            }
        }
        return false;
    }

    const listEquals = (tags1 : FoodPlaceTagModel[], tags2 : FoodPlaceTagModel[]) => {
        for (let t of tags1) {
            if (!isIncluded(tags2, t)) {
                return false;
            }
        }
        for (let t of tags2) {
            if (!isIncluded(tags1, t)) {
                return false;
            }
        }
        return true;
    }

    const filterByTags = () => {
        return filterByNeighborhood().filter(t => intersects(t.tags, selectedTags));
    }

    const filterByNeighborhood = () => {
        if (selectedNeighbordhood === Neighborhood.ANY) {
            return foodPlaces;
        }
        else {
            return foodPlaces.filter(t => t.neighborhood === selectedNeighbordhood);
        }
    }


    return (
        <section className={`food content-wrapper`}>
            <Navigation />
            <h1 className={`food-title`}>Food</h1>

            <div className={`food-places-filters flex-row`}>
                <select name="neighbordhoods" id="neighbordhoods" className={`food-places-neighborhoods-select`} onChange={e => setSelectedNeighbordhood(e.target.value)}>
                    {neighbordhoods.map(t => <option value={t} key={t} >{t}</option>)}
                </select>
                <div className={`food-places-tags flex-row`}>
                    <FoodPlaceTag tag={FoodPlaceTagModel.CHEAP} selected={tagCheapSelected} setSelected={setTagCheapSelected} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
                    <FoodPlaceTag tag={FoodPlaceTagModel.FAST} selected={tagFastSelected} setSelected={setTagFastSelected} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
                    <FoodPlaceTag tag={FoodPlaceTagModel.LOCAL} selected={tagLocalSelected} setSelected={setTagLocalSelected} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
                    <button className={`select-all-button`} onClick={onClickSelectAllTags} disabled={listEquals(selectedTags, tags)}>Select all tags</button>
                </div>
            </div>
            
            {filterByTags().map(t => <FoodPlace foodPlace={t} key={t.name}/>)}

            <Footer/>
        </section>
    );
}

export default Food;