import React from 'react';
import AcropolisMuseum from './AcropolisMuseum/AcropolisMuseum';
import MuseumCombinedTicket from './MuseumCombinedTicket/MuseumCombinedTicket';
import './Museums.scss';

const Museums : React.FC = props => {
    return (
        <section className={`museums`}>
            <p>
                <h3>Practical info</h3>
                <b>Free admission days:</b> Mar 6, Apr 18, May 18, last week-end of Sep, October 28, first Sun of Nov-Mar<br></br>
                <b>Closing days:</b> Jan 1, March 25, Good Friday Morning (open at 12:00), Easter Sunday, May 1, Dec 25, Dec 26<br></br>
            </p>
            <MuseumCombinedTicket/>
            <p>
                <h3>Prices without the combined ticket</h3>
                Below are the prices and opening hours for the museums without the combined ticket:
            </p>

            <table className={`price-table`}>
                <tr className={`price-table-header`}>
                    <th className={`cell`}>Museum</th>
                    <th className={`cell`}>Opening hours</th>
                    <th className={`cell align-right`}>Price</th>
                </tr>
                <tr className={`price-table-line`}>
                    <th className={`cell`}>National Archaeological Museum</th>
                    <th className={`cell`}>Mon - Sun 08:00 - 20:00<br></br>Tue 13:00 - 20:00</th>
                    <th className={`cell align-right`}>12€</th>
                </tr>
                <tr className={`price-table-line`}>
                    <th className={`cell`}>Byzantine and Christian Musem</th>
                    <th className={`cell`}>Mon - Sun 08:00 - 20:00<br></br>Tue 13:00 - 20:00</th>
                    <th className={`cell align-right`}>8€</th>
                </tr>
                <tr className={`price-table-line`}>
                    <th className={`cell`}>Numismatic Museum</th>
                    <th className={`cell`}>Mon - Sun 08:30 - 15:30<br></br>Closed on Tue</th>
                    <th className={`cell align-right`}>6€</th>
                </tr>
                <tr className={`price-table-line`}>
                    <th className={`cell`}>Epigraphic Museum</th>
                    <th className={`cell`}>Mon - Sun 08:30 - 15:30<br></br>Closed on Tue</th>
                    <th className={`cell align-right`}>4€</th>
                </tr>
            </table>

            <AcropolisMuseum/>
        </section>
    );
}

export default Museums;