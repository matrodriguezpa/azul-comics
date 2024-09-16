import React from 'react';
import Chapterdocument from '../components/Chapterdocument';
import Comicnavigation from "../components/Comicnavigation";
import Comments from "../components/Comments";
import Sidebar from "../components/Sidebar";

function Chapter() {
    return (
        <div className="main">
            <Comicnavigation/>
            <div className="content-container">
                <Chapterdocument/>
                <Sidebar/>
            </div>
            <Comments/>
        </div>

    );
}


export default Chapter;