import React from 'react';

import '../Styling/SlideShow.css';

import video from '../UI/SlideVideo.mp4';

import { Link } from "react-router-dom"



const SlideShow = () => {

    return (
        <div>
            <section className="showcase">
                <div className="video-container">
                    <video autoPlay loop muted controls>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="content">
                    <h3 className="animateIt">Aluminium curtain wall, windows and doors are our speciality.</h3>
                    <h4 className="animateIt" style={{ fontWeight: "lighter" }}>Glazing solutions are our passion.</h4>
                    <Link to="/about" className="btns">Read More</Link>
                </div>
            </section>

        </div>
    )
}
export default SlideShow;