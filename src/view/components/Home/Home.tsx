import React from 'react';
import Before from '../Before/Before';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './Home.scss';

const Home : React.FC = props => {
    return (
        <div className={`home`}>
            <Header />
            <div className={`content-wrapper-wrapper`}>
                <section className={`content-wrapper`}>
                    <Before />
                    <Navigation />
                    <Footer />
                </section>
            </div>
        </div>
    );
}

export default Home;