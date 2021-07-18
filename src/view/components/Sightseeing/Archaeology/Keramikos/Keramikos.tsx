import React from 'react';

const Keramikos : React.FC = props => {
    return (
        <section className={`one-site keramikos`} id={`keramikos`}>
            <h2>Keramikos (or Kerameikos) and Keramikos museum</h2>
            <div className={`one-site-content flex-row`}>
                <div className={`practical-info`}>
                    <b>Time spent there:</b> 45 min<br></br>
                    <b>Entrance:</b> <a href='https://goo.gl/maps/yu2SKtVtDPwzSo3w8' target='_blank' rel="noreferrer">here</a>
                </div>
                <div className={`one-site-text`}>
                    <p>
                        <b>What is it ?</b> It was a cemetery where important Athenians fallen during wars were burried (500 - 300 BC) and fortification walls.
                        The small museum displays grave decorations and pottery.
                    </p>
                    <p>
                        The ruins are partly visible from outside.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Keramikos;