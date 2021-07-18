import React from 'react';

const RomanAgora : React.FC = props => {
    return (
        <section className={`one-site roman-agora`} id={`roman-agora`}>
            <h2>Roman Agora</h2>
            <div className={`one-site-content flex-row`}>
                <div className={`practical-info`}>
                    <b>Time spent there:</b> 25 min<br></br>
                    <b>Entrance:</b> <a href='https://goo.gl/maps/iBY48crUB8bYafiX7' target='_blank' rel="noreferrer">here</a>
                </div>
                <div className={`one-site-text`}>
                    <p>
                        <b>What is it ?</b> During the 1st century BC, the commercial center of the city was transferred from the Ancient Agora to the Roman Agora, while the Ancient Agora was converted into a place of cult for the Roman Emperor.
                    </p>
                    <p>
                        <b>What to see ?</b> Tower of the Winds: an octogonal Marble tower with sun-dials outside and a waterclock inside.<br></br>
                        Fethiye Mosque
                    </p>
                    <p>
                        The ruins are very visible from outside.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default RomanAgora;