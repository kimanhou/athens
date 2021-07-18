import React from 'react';

const Acropolis : React.FC = props => {
    return (
        <section className={`one-site acropolis`} id={'acropolis'}>
            <h2>Acropolis</h2>
            <div className={`one-site-content flex-row`}>
                <div className={`practical-info`}>
                    <b>Best time to visit:</b> 8:00 - 10:00 or 18:00 - 20:00<br></br>
                    <b>Time spent there:</b> 2h<br></br>
                    Do not try to buy a ticket at the booth there, the lines can be huge. If you want a combined ticket, get it at a lesser site or online.<br></br>
                    <b>Entrance:</b> There are 2 entrances. The main entrance (<a href='https://goo.gl/maps/Yuag7d7pZC8cUgKx5' target='_blank' rel="noreferrer">here</a>) is quite busy because of groups coming in coaches, the secondary entrance is on the east side, next to Dionysos Theater (<a href='https://goo.gl/maps/HhfEWrtyKPkkwNCw6' target='_blank' rel="noreferrer">here</a>).
                    The secondary entrance is further away from the way stairs that lead to the top of the hill than the main entrace. From the secondary entrance, it's a 10 min walk to the top.
                    There is no need to be particularly fit to reach the Parthenon. 
                </div>
                <div className={`one-site-text`}>
                    <p><b>What is it ?</b> The Acropolis is a hill dedicated to the Goddess Athena, protector of the city. The first temples were destroyed by the Persians in 480BC, then rebuilt during Athens' Golden Age in 447BC.
                    The statues used to be colored (<a href='https://www.youtube.com/watch?v=nzs4rB1Pp2k' target='_blank' rel="noreferrer">cool video here</a>). A British guy, Lord Elgin, stole the best pieces in 1801, which are now exposed at the British Museum. The Greeks are still waiting for their return.</p>
                    <p>You cannot enter the buildings, just go around them. Do not touch the marble.</p>
                    <p>
                        <b>What to see ?</b> The top of the hill is a large open space with 4 main buildings, listed below in the order you will see them :<br></br>
                        <h4>Propylea</h4>
                        <p>The entrance of the Acropolis used to be a monumental staircase designed to impress the visitor. The remains are still very impressive to this day.</p>

                        <h4>Temple of Athena Nike</h4>
                        <p>On the right side of the Propylea and easy to miss, the Temple of Athena Nike is a tiny and simple building on a platform, thus very visible from outside the Acropolis.
                            The temple has 4 columns at the front and 4 at the back.</p>

                        <p>Once you've passed the Propylea, you will get to an open area with the Parthenon (it's the big one) on your right, the Eretcheion on your left and at the far end a viewpoint (where the Greek flag is).</p>

                        <h4>Parthenon</h4>
                        <p>Big and impressive, the Parthenon wasn't a real temple, nor the most sacred place either, it was just here to house the statue of Athena (which was carried away by Christians from Byzance then disappeared).</p>

                        <h4>Erechteion, Pandroseion and other</h4>
                        <p>The small building on the left is actually 3 temples : Erechteion (where Poseidon hit the ground with his trident and created salty spring), 
                        Pandroseion (where Athena hit the ground with a rock and created an olive tree), and the old temple of Athena (?). It was the most important building during Ancient Greece.
                        The 6 columns in shape of women, called the Caryatids, are famous but these are copies, 5 of the originals are exposed in the Acropolis Museum, while the last one was taken by Lord Elgin to the British Museum in London.
                        The olive tree is not the original either.</p>
                    </p>
                    <p>On the slopes, there are two theaters: the Theater of Dionysos is ruins, while the Odeon of Herodes Atticus still functions as a theater today.</p>
            </div>
        </div>
        </section>
    );
}

export default Acropolis;