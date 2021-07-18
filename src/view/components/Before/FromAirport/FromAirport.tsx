import React from 'react';
import ContentSection from '../../ContentSection/ContentSection';
import './FromAirport.scss';
import FromAirportIllustration from './FromAirportIllustration';

const FromAirport : React.FC = props => {
    return (
        <ContentSection className={`from-airport`}>
            <h2>From airport to city center</h2>
            <p>The airport is 35 km away from the city center.</p>

            <FromAirportIllustration />

            <div className={`from-airport-section`}>
                <h3>From airport to Syntagma (Σύνταγμα) station</h3>
                <div className={`from-airport-options`}>
                    <div className={`from-airport-subsection`}>
                        <h4>Option 1 : Metro M3 (blue line)</h4>
                        <b>Where:</b> adjacent to the Main Terminal, accessible by an elevated walkway<br></br>
                        <b>Direction:</b> towards Nikaia<br></br>
                        <b>Duration:</b> 40 min<br></br>
                        <b>Frequency:</b> every 30 min (02′ and 32′) (timetable : <a href='https://www.athensairporttaxi.com/metro/timetable-from-airport'target='_blank' rel="noreferrer">here</a>)<br></br>
                        <b>Cost:</b> 9€<br></br>
                    </div>
                    <div className={`from-airport-subsection`}>
                        <h4>Option 2 : Bus X95</h4>
                        <b>Where:</b> between exits 4 and 5 of arrivals terminal<br></br>
                        <b>Direction:</b> towards ΑΕΡ/ΝΑΣ ΑΘΗΝΩΝ - ΣΥΝΤΑΓΜΑ (EXPRESS)<br></br>
                        <b>Duration:</b> 40-55 min <br></br>
                        <b>Frequency:</b> every 15-20 min (timetable : <a href='https://www.athensairportbus.com/en/timetable/x95airporttoathensdowntown.html' target='_blank' rel="noreferrer">here</a> - 19:40, 19:55, 20:10, 20:25, 20:40, 20:55)<br></br>
                        <b>Cost:</b> 6€ (or 5.50€ ?), ticket valid only on the express bus<br></br>
                    </div>
                </div>
            </div>
            
            <div className={`from-airport-section`}>
                <h3>From Syntagma (Σύνταγμα) station to our Airbnb</h3>
                <div className={`from-airport-options`}>
                    <div className={`from-airport-subsection`}>
                        <h4>Option 1 : Metro M2 (red line)</h4>
                        <b>Direction:</b> towards Anthoupoli = ΑΝΘΟΥΠΟΛΗ<br></br>
                        <b>Duration:</b> 3 min, 2 stops (Panepistimiou = PMΠΑΝΕΠΙΣΤΗΜΙΟ in the middle) <br></br>
                        <b>Stop:</b> Omonia station, exit Panepistimiou<br></br>
                        <b>Cost:</b> 1.20€ if you took the express bus, or included in the metro ticket from airport<br></br>
                        <br></br><b>Then walk 10 min.</b>
                    </div>
                    <div className={`from-airport-subsection`}>
                        <h4>Option 2 : Walk 25 min</h4>
                    </div>
                </div>
            </div>

            <h3>Conclusion</h3>
            <p>
                <b>Duration:</b> All options take about the same time. <br></br>
                <b>Cost:</b> Bus + metro will cost 7.20€ / pax. Metro only will cost 9€ / pax.<br></br><br></br>
                <b>What we did:</b> We arrived at the station at 8:22, train was announced for 8:32, we bought tickets from the machine, and the train left at 8:25. 38 min to Syntagma, 53 min total from the airport to Omonia.<br></br><br></br>
                Taxi costs a flat fare of 38€ (54€ after midnight).
            </p>
        </ContentSection>
    );
}

export default FromAirport;