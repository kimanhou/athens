import React from 'react';

const HadriansLibrary : React.FC = props => {
    return (
        <section className={`one-site hadrian-s-library`} id={`hadrians-library`}>
            <h2>Hadrian's Library</h2>
            <div className={`one-site-content flex-row`}>
                <div className={`practical-info`}>
                    <b>Time spent there:</b> 25 min<br></br>
                    <b>Entrance:</b> <a href='https://goo.gl/maps/aSMdGJG6h32zWH1fA' target='_blank' rel="noreferrer">here</a>
                </div>
                <div className={`one-site-text`}>
                    <p>
                        <b>What is it ?</b> It was a library created by Roman Emperor Hadrian around 100 AC. During Byzantine times, 3 churches have been consecutively built in the middle of the courtyard.
                    </p>
                    <p>
                        <b>What to see ?</b> Only a couple of walls and columns remain standing.
                    </p>
                    <p>
                        The ruins are very visible from outside.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HadriansLibrary;