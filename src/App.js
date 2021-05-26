import React from 'react';
import NavBar from "./Components/Navbar/NavBar";
import HomePage from "./Pages/Home";

import './App.scss'
import DirectionsPage from "./Pages/Directions";
import TeamPage from "./Pages/Team";
import MobilePage from "./Pages/Mobile";
import SystemPage from "./Pages/System";

const App = () => {
    return (
        <div className={'app'}>
            <NavBar/>
            <HomePage/>
            <DirectionsPage/>
            <TeamPage/>
            <MobilePage/>
            <SystemPage/>
        </div>
    );
};

export default App;