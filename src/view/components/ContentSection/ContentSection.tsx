import React from 'react';
import './ContentSection.scss';

interface IContentSectionProps {
    className : string;
}

const ContentSection : React.FC<IContentSectionProps> = props => {
    return(
        <section className={`content-section ${props.className}`}>
            {props.children}
        </section>
    );
}

export default ContentSection;