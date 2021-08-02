import React from 'react';
import './Neighborhoods.scss';
import map from '../../../../images/neighborhood-map.jpeg';

const Neighborhoods : React.FC = props => {
    return (
        <div className={`neighborhoods`}>
            <h2>Historical center</h2>
            <h3>Plaka</h3>
            <p>
                Old, picturesque, touristy<br></br>
                <b>Where ?</b> Northern and Eastern slopes of the Acropolis
            </p>

            <h3>Psiri</h3>
            <p>
                Gentrified, nightlife<br></br>
                <b>Where ?</b> Between Omania and Monastiraki, West of Athinas street, around Iroon square
            </p>

            <h3>Monastiraki</h3>
            <p>
                Flea market, shopping<br></br>
                <b>Where ?</b> Around Monastiraki Square (and metro station), the main streets are Pandrossou Street and Adrianou Street
            </p>

            <div className={`separator`}></div>

            <h2>Outside the historical center</h2>
            <h3>Exarchia</h3>
            <p>
                Underground, edgy, anarchist and heavily tagged<br></br>
                <b>Where ?</b> North East of Omania, around Exarchia square, main street is Valtetsiou
            </p>

            <h3>Kolonaki</h3>
            <p>
                Wealthy, upmarket, high-end and chic<br></br>
                <b>Where ?</b> On the southern slopes of Lycabettus hill, around Kolonaki square, main street is Skoufa
            </p>

            <h3>Gazi</h3>
            <p>
                Technopolis (former gas factory, now cultural center and exhibition and concert hall), nightlife, cool and trendy<br></br>
                <b>Where ?</b> Around Technopolis and Keramikos metro station
            </p>

            <h3>Pangrati</h3>
            <p>
                Home of the Panathenaic Stadium, also know as Kallimarmaro, authentic, creative<br></br>
                <b>Where ?</b> Around Varnava Square. The stadium can be seen from outside by entering the door <a href='https://goo.gl/maps/d3oAvtXxUVmKpNeH8' target='_blank'>here</a>.
            </p>
            
            
            <div className={`separator`}></div>

            <h2>Beach</h2>
            <h3>Edem</h3>
            <p>
                Closest public beach to the city center, sandy, not too crowded, decent, quite clean, shower and a bit of shade under the tamaris.<br></br>
                <b>Where ?</b> 30 min tram (line 5, every 20 min) from Syntagma, South of Athens
            </p>
            
            
            <img src={map} alt='Map of Athens neighborhoods'/>
        </div>
    );
}

export default Neighborhoods;