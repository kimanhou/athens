import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationLink.scss';

interface INavigationLinkProps {
    text : string;
    to : string;
}

const NavigationLink : React.FC<INavigationLinkProps> = props => {
    return (
        <Link className={`navigation-link`} to={props.to} >
            {props.text}
        </Link>
    );
}

export default NavigationLink;