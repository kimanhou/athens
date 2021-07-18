import React from 'react';

const Olympieion : React.FC = props => {
    return (
        <section className={`one-site olympieion`} id={`olympieion`}>
            <h2>Olympieion, also know as Temple of Olympian Zeus</h2>
            <div className={`one-site-content flex-row`}>
                <div className={`practical-info`}>
                    <b>Time spent there:</b> 10 min<br></br>
                    <b>Entrance:</b> <a href='https://goo.gl/maps/o2pt49vD3SQPapzi7' target='_blank' rel="noreferrer">here</a>
                </div>
                <div className={`one-site-text`}>
                    <p>
                        <b>What is it ?</b> It's the largest of the ancient temples of Athens and one of the largest in the ancient world. Its construction lasted 6 centuries.
                    </p>
                    <p>
                        <b>What to see ?</b> It used to boast 104 columns but only 16 of the originals (+ a couple of other at the other end) remain standing today, however they are under renovation.
                    </p>
                    <p>
                        The ruins are very visible from outside, especially from Hadrian's Arch (the gate was built by the Athenian in honor of the Roman Emperor who completed the temple).
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Olympieion;