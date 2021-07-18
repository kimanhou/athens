import React from 'react';
import Acropolis from './Acropolis/Acropolis';
import AncientAgora from './AncientAgora/AncientAgora';
import CombinedTicket from './CombinedTicket/CombinedTicket';
import HadriansLibrary from './HadriansLibrary/HadriansLibrary';
import Keramikos from './Keramikos/Keramikos';
import Lykeion from './Lykeion/Lykeion';
import Olympieion from './Olympieion/Olympieion';
import RomanAgora from './RomanAgora/RomanAgora';
import './Archaeology.scss';

const Archaeology : React.FC = props => {
    return (
        <div className={`archaeology`}>
            <CombinedTicket/>
            <Acropolis />
            <AncientAgora />
            <RomanAgora />
            <HadriansLibrary />
            <Olympieion />
            <Keramikos />
            <Lykeion />
        </div>
    );
}

export default Archaeology;