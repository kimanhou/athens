import React from 'react';

const Lykeion : React.FC = props => {
    return (
        <section className={`one-site lykeion`} id={`lykeion`}>
            <h2>Lykeion, also know as Lyceum of Aristotle</h2>
            <div className={`one-site-content flex-row`}>
                <div className={`practical-info`}>
                    <b>Time spent there:</b> 10 min<br></br>
                    <b>Entrance:</b> <a href='https://goo.gl/maps/ytP8JtV55x2Yca1u9' target='_blank' rel="noreferrer">here</a>
                </div>
                <div className={`one-site-text`}>
                    <p>
                        <b>What is it ?</b> It was the place of a gymnasium where young men trained and wrestled. Then people started giving lectures and it was turned in some sort of university. Aristotle used to teach there.
                    </p>
                    <p>
                        The ruins are visible from outside.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Lykeion;