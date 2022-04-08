import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./MyProject/Projects";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className={'AppRoot'}>
            <Header/>
            <Main />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
