import React from 'react';
import './Header.scss';
import hero from '../../../images/hero.png';

interface IHeaderProps {}

const Header : React.FC<IHeaderProps> = props => {
    return (
        <section className={`header`}>
            <div className={`background`}/>
            <div className={`header-text`}>
                ATHENS
            </div>
            <div className={`header-hero-image`}>
                <img src={hero} alt='View of Acropolis at sunset'/>
            </div>
        </section>
    );
}

export default Header;