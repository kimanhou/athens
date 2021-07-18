import React, { useState } from 'react';
import Expand from './Expand';
import './Navigation.scss';
import NavigationLink from './NavigationLink';

interface INavigationProps {}

const Navigation : React.FC<INavigationProps> = props => {
    var [isNavVisible, setIsNavVisible] = useState(false);
    var isNavVisibleClassname = isNavVisible ? "is-nav-visible" : "";
  
    const onClickExpand = () => {setIsNavVisible(!isNavVisible);}
    
    return (
        <div className={`navigation`}>
            <Expand onClick={onClickExpand} isExpanded={isNavVisible}/>
            <div className={`navigation-links-container`}>
                <div className={`navigation-links-moving ${isNavVisibleClassname}`}>
                    <NavigationLink text={'Before departure'} to='/' />
                    <NavigationLink text={'Sightseeing'} to='/sightseeing' />
                    <NavigationLink text={'Food'} to='/food' />
                </div>
            </div>
        </div>
    );
}

export default Navigation;