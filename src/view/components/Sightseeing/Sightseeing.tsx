import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Archaeology from './Archaeology/Archaeology';
import Museums from './Museums/Museums';
import Neighborhoods from './Neighborhoods/Neighborhoods';
import './Sightseeing.scss';
import SightseeingNavigation from './SightseeingNavigation/SightseeingNavigation';

interface IContentProps {
    setCurrentSection : (infoSection : InfoSection) => void;
    currentSection : InfoSection;
}

export enum InfoSection {
    archaeology,
    museums,
    neighborhoods
}

const Sightseeing : React.FC<IContentProps> = props => {
    let InfoContent : React.FC;
    switch (props.currentSection) {
        case InfoSection.archaeology:
            InfoContent = Archaeology;
        break;
        case InfoSection.museums:
            InfoContent = Museums;
        break;
        case InfoSection.neighborhoods:
            InfoContent = Neighborhoods;
        break;
        default:
            InfoContent = Archaeology;
    }
      var archaeologyActiveClassname = props.currentSection === InfoSection.archaeology ? "active" : "";
      var museumsActiveClassname = props.currentSection === InfoSection.museums ? "active" : "";
      var neighborhoodsActiveClassname = props.currentSection === InfoSection.neighborhoods ? "active" : "";
    return (
        <div className={`sightseeing content-wrapper`}>
            <Navigation />

            <h1>Sightseeing</h1>

            <div className={`sightseeing-navigation-links flex-row`}>
                <SightseeingNavigation title="Archaeological sites" activeClassname={`first ${archaeologyActiveClassname}`} setCurrentSection={() => props.setCurrentSection(InfoSection.archaeology)}/>
                <SightseeingNavigation title="Museums" activeClassname={museumsActiveClassname} setCurrentSection={() => props.setCurrentSection(InfoSection.museums)}/>
                <SightseeingNavigation title="Neighborhoods" activeClassname={neighborhoodsActiveClassname} setCurrentSection={() => props.setCurrentSection(InfoSection.neighborhoods)}/>
            </div>

            <div className={`info-content`}>
                <InfoContent />
            </div>

            <Footer />
        </div>
    );
}

export default Sightseeing;