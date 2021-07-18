import React from 'react';
import ArchaeologicalSite from '../ArchaeologicalSite/ArchaeologicalSite';
import './CombinedTicket.scss';
import acropolis from '../../../../../images/sigthseeing/acropolis.jpg';
import ancientagora from '../../../../../images/sigthseeing/ancient-agora.jpeg';
import romanagora from '../../../../../images/sigthseeing/roman-agora.jpeg';
import hadrianslibrary from '../../../../../images/sigthseeing/hadrians-library.jpeg';
import olympieion from '../../../../../images/sigthseeing/olympieion.jpeg';
import keramikos from '../../../../../images/sigthseeing/keramikos.jpeg';
import lykeion from '../../../../../images/sigthseeing/lykeion.jpeg';

const CombinedTicket : React.FC = props => {
    return (
        <section className={`combined-ticket`}>
            <div className={`archaelogical-sites`}>
                <div className={`flex-row`}>
                    <ArchaeologicalSite className='acropolis' image={acropolis} siteName='Acropolis' goToClassName='acropolis' />
                    <ArchaeologicalSite className='ancient-agora' image={ancientagora} siteName='Ancient Agora' goToClassName='ancient-agora' />
                    <ArchaeologicalSite className='roman-agora' image={romanagora} siteName='Roman Agora' goToClassName='roman-agora' />
                </div>
                <div className={`flex-row`}>
                    <ArchaeologicalSite className='hadrians-library' image={hadrianslibrary} siteName="Hadrian's library" goToClassName='hadrians-library' />
                    <ArchaeologicalSite className='olympieion' image={olympieion} siteName='Olympieion' goToClassName='olympieion' />
                    <ArchaeologicalSite className='keramikos' image={keramikos} siteName='Keramikos' goToClassName='keramikos' />
                    <ArchaeologicalSite className='lykeion' image={lykeion} siteName='Lykeion' goToClassName='lykeion' />
                </div>
            </div>

            <div className={`paragraph`}>
                <h3>Practical info</h3>
                <p>
                    <b>Free admission days:</b> Mar 6, Apr 18, May 18, last week-end of Sep, October 28, first Sun of Nov-Mar<br></br>
                    <b>Closing days:</b> Jan 1, March 25, Good Friday Morning (open at 12:00), Easter Sunday, May 1, Dec 25, Dec 26<br></br>
                    <b>Opening times (summer 2021):</b> Mon - Sun 8:00 - 20:00, last admission 19:30<br></br>
                </p>
            </div>

            <div className={`paragraph`}>
                <h3>Combined ticket</h3>
                <p>
                    These sites can be visited with one combined ticket.<br></br>
                    <b>Cost:</b> 30€<br></br>
                    <b>Duration:</b> 5 days<br></br>
                    One entry per site<br></br>
                    <b>Buy online:</b> <a href='https://etickets.tap.gr/' target='_blank' rel="noreferrer">etickets.tap.gr</a><br></br>
                    You can buy your ticket online in advance but you need to specify the starting date, which cannot be modified afterwards. Note that reduced price tickets will have to be exchanged at the ticket booth anyway.
                    You can also buy the combined ticket from the ticket booth of any of these sites.<br></br>
                    
                    <br></br>
                    <b>What we did:</b> we bought our combined ticket online the day before we wanted to visit the Acropolis and didn't have to wait at all. We then visited the other sites over the 4 remaining days.<br></br>
                    The amount of time spent indicated below is the time we spent in each site. We are fast visitors.
                </p>
            </div>
            
            <div className={`paragraph`}>
                <h3>Prices without the combined ticket</h3>
                <p>Below are the prices for the main archaeological sites of Athens without the combined ticket:</p>
                
                <table className={`price-table`}>
                    <tr className={`price-table-header`}>
                        <th className={`cell`}>Archaeological sites</th>
                        <th className={`cell align-right`}>Price</th>
                    </tr>
                    <tr className={`price-table-line`}>
                        <th className={`cell`}>Acropolis</th>
                        <th className={`cell align-right`}>20€</th>
                    </tr>
                    <tr className={`price-table-line`}>
                        <th className={`cell`}>Ancient Agora</th>
                        <th className={`cell align-right`}>10€</th>
                    </tr>
                    <tr className={`price-table-line`}>
                        <th className={`cell`}>Roman Agora</th>
                        <th className={`cell align-right`}>8€</th>
                    </tr>
                    <tr className={`price-table-line`}>
                        <th className={`cell`}>Hadrian's library</th>
                        <th className={`cell align-right`}>6€</th>
                    </tr>
                    <tr className={`price-table-line`}>
                        <th className={`cell`}>Olympieion</th>
                        <th className={`cell align-right`}>8€</th>
                    </tr>
                        <tr className={`price-table-line`}>
                        <th className={`cell`}>Kerameikos</th>
                        <th className={`cell align-right`}>8€</th>
                    </tr>
                    <tr className={`price-table-line`}>
                        <th className={`cell`}>Aristotle's Lykeion</th>
                        <th className={`cell align-right`}>4€</th>
                    </tr>
                </table>    
            </div>
        </section>
    );
}

export default CombinedTicket;