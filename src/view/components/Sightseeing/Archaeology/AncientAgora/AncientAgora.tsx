import React from 'react';

const AncientAgora : React.FC = props => {
    return (
        <section className={`one-site ancient-agora`} id={`ancient-agora`}>
            <h2>Ancient Agora</h2>
            <div className={`one-site-content flex-row`}>
                <div className={`practical-info`}>
                    <b>Time spent there:</b> 1h40<br></br>
                    It opens at 8:00 but when we went, the museum was being cleaned until 10:00.<br></br>
                    <b>Entrance:</b> <a href='https://goo.gl/maps/HR4MCPKD9Nn9jb336' target='_blank' rel="noreferrer">here</a>
                </div>
                <div className={`one-site-text`}>
                    <p>
                        <b>What is it ?</b> The Ancien Agora was the center of public life and Athenian democracy, where people used to walk, chit chat, do business, take care of administrative stuff, pray, vote ...
                    </p>
                    <p>
                        <b>What to see ?</b> Panathenaic way : way that goes diagonally through the main square and leads to Acropolis.<br></br>
                        Temple of Hephaistos : exceptionnally well preserved, on a small hill.<br></br>
                        Ruins : Middle Stoa (longest building), a theater (Aggrippa odeion, burnt then Romains built a concert hall at the same spot and reused 4/6 statues of Giants and Titans).<br></br>
                        Stoa of Attalos : reconstructed according to the real one, it used to be a shaded gallery with 21 shops at the back and now houses a museum. Upstairs, there are models of the Acropolis and the Ancient Agora in their prime.<br></br>
                    </p>
                    <p>
                        The ruins are partly visible from outside.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AncientAgora;