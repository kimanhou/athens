import React from 'react';
import { FoodPlaceTag as FoodPlaceTagEnum } from '../../../../model/FoodPlace';
import './FoodPlaceTag.scss';

interface IFoodPlaceTagProps {
    tag : FoodPlaceTagEnum;
    selected : boolean;
    setSelected : (selected : boolean) => void;
    selectedTags : FoodPlaceTagEnum[];
    setSelectedTags : (selectedTags : FoodPlaceTagEnum[]) => void;
}

const FoodPlaceTag : React.FC<IFoodPlaceTagProps> = props => {
    const selectedClassName = props.selected ? 'selected' : '';

    const onClick = () => {
        if (props.selected) {
            props.setSelectedTags(props.selectedTags.filter(t => t !== props.tag));
        }
        else {
            props.setSelectedTags([ ...props.selectedTags, props.tag ]);
        }
        props.setSelected(!props.selected);
    }

    return (
        <div className={`food-place-tag ${selectedClassName}`} onClick={onClick}>
            {props.tag}
        </div>
    );
}

export default FoodPlaceTag;