import React from 'react';
import ContentSection from '../../ContentSection/ContentSection';
import './CheckList.scss';
import CheckListItem from './CheckListItem';

interface ICheckListProps {

}

const CheckList : React.FC<ICheckListProps> = props => {
    return (
        <ContentSection className={`before-check-list`}>
            <h2>Before departure</h2>

            <div className={`check-list-items`}>
                <CheckListItem title='Covid' text='Vaccination certificate (14 days since the last vaccination)' checked={true} link='https://attestation-vaccin.ameli.fr/' />
                <CheckListItem title='European Health Insurance Card' text='Received and valid' checked={true} />
                <CheckListItem title='Passenger Locator Form (PLF)' text='To be filled online no later than 11.59 PM of the day before arrival' link='https://travel.gov.gr/#/' checked={true} />
                <CheckListItem title='Flight' text='Online check-in opens 30 hours before departure' link='https://www.transavia.com/en-EU/my-transavia/check-in/login/' checked={false} />
                <CheckListItem title='Accommodation' text='Airbnb booked' checked={true} />
                <CheckListItem title='Google maps' text='Download offline map of Athens' checked={false} />
                <CheckListItem title='Currency' text='Euro' checked={true} />
                <CheckListItem title='Visa' text='No need for EU' checked={true} />
                <CheckListItem title='Electricity' text='Same as France' checked={true} />
            </div>
        </ContentSection>
    );
}

export default CheckList;