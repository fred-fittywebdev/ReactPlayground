import React from 'react';
import Header from '../components/Header';
import Countries from '../styles/components/Countries';
import Horloge from '../components/Horloge'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="container">
            <Horloge />
                <h1>Ceci est un petit site pour présenter différents projets en React.js</h1>
            </div>
        </div>
    );
};

export default Home;