import React from 'react';
import { myScrollTo } from '../../../../../Util';
import './ArchaeologicalSite.scss';

interface IArchaeologicalSiteProps {
    className : string;
    image : string;
    siteName : string;
    goToClassName : string;
}

const ArchaeologicalSite : React.FC<IArchaeologicalSiteProps> = props => {
    const onClick = () => {
        myScrollTo(props.goToClassName);
    }

    return (
        <div className={`archaeological-site ${props.className}`} onClick={onClick} 
            style={{ backgroundImage: `url(${props.image})` }}>
            <div className={`image`}>
                <div className={`hover-shadow`}></div>
            </div>
            <div className={`text`}>
                {props.siteName}
            </div>
        </div>
    );
}

export default ArchaeologicalSite;