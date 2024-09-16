import React from 'react';

const Slideshow = () => {
    return (
        <div className="Slideshow-container">
            <div className="slide-show">
                <a className="left" onClick={() => console.log('previous slide')}>-</a>
                <div className="showSlider fade">
                    <img src="/assets/Tarjetas/1111.png" alt=""/>
                    <p className="contentBook">Revive</p>
                </div>
                <div className="showSlider fade">
                    <img src="/assets/Tarjetas/1111.png" alt=""/>
                    <p className="contentBook">Revive</p>
                </div>
                <div className="showSlider fade">
                    <img src="/assets/Tarjetas/1111.png" alt=""/>
                    <p className="contentBook">Revive</p>
                </div>
                <div className="showSlider fade">
                    <img src="/assets/Tarjetas/1111.png" alt=""/>
                    <p className="contentBook">Revive</p>
                </div>
                <div className="showSlider fade">
                    <img src="/assets/Tarjetas/1111.png" alt=""/>
                    <p className="contentBook">Revive</p>
                </div>
                <div className="showSlider fade">
                    <img src="/assets/Tarjetas/1111.png" alt=""/>
                    <p className="contentBook">Revive</p>
                </div>
                <a className="right" onClick={() => console.log('next slide')}>+</a>
            </div>
        </div>
    );
};

export default Slideshow;
