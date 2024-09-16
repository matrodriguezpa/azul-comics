import React from 'react';
import Maincontent from '../components/Maincontent';
import Slideshow from '../components/Slideshow';
import Sidebar from '../components/Sidebar';

function Home() {
    return (
        <div className="main">
            <Slideshow/>
            <div className="content-container">
                <Maincontent/>
                <Sidebar/>
            </div>
        </div>
    );
}

export default Home;