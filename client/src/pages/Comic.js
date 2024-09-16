import React from 'react';
import Chapterlist from '../components/Chapterlist';
import Comicnavigation from '../components/Comicnavigation';
import Sidebar from "../components/Sidebar";

function Comic() {
    return (
        <div className="main">
            <Comicnavigation/>
            <div className="content-container">
                <Chapterlist/>
                <Sidebar/>
            </div>
        </div>
    );
}

export default Comic;