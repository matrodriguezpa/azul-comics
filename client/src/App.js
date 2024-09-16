import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Slideshow from './components/Slideshow';
import Sidebar from './components/Sidebar';
import './style.css';


function App() {
    return (
        <div>

            <Header/>
            <Slideshow/>
            <div className="content-container">
                <Sidebar/>
                <MainContent/>
                <Sidebar/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
