import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js'

import '../assets/css/app.css';

import NavBar from './navbar';
import LandingPage from './landing_page';
import Work from './work';
import About from './about';
import Skills from './skills';
import Contact from './contact';
import Footer from './footer';

const App = () => (
    <div>
        <NavBar/>
        <LandingPage/>
        <Work/>
        <About/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
);

export default App;
