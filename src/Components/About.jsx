import React from 'react';

import { Link } from "react-router-dom";

import proudlycanadian from "../UI/proudlycanadian.JPEG XR"

import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/About.css';


const About = () => {



    React.useEffect(() => {


    });

    return (
        <div>
            <br />
            <h1 style={{ textTransform: "uppercase" }}>
                <ScrollAnimation delay={400}
                    animateIn='flipInX'
                    animateOut='flipOutY'
                >
                    Alumtec Glazing solution :
            </ScrollAnimation>
            </h1>
            <h3 style={{ textTransform: "uppercase", fontWeight: "lighter" }}>
                <ScrollAnimation animateIn="bounceInLeft" delay={200}>
                    We make it easy for you to find the best windows and doors <br />
            to reflect your style and taste
                </ScrollAnimation>

            </h3>
            <h5 style={{ fontWeight: "lighter" }}>
                <ScrollAnimation animateIn="fadeIn" delay={300}>
                    Alumtec Glazing solution Inc. is a leading aluminum and glass solutions provider offering a wide
                    range of aluminum and glass products and services.We specialize in
                    design, fabrication and installation of aluminum windows, woors and curtain wall
                    for commercial and residential applications.
                    We are committed towards quality and customer service. <br /> <br /> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Quality is not just another goal, it is our basic
                    strategy for survival and future as it’s our journey to the Total Quality Management.
                    It is our long-term commitment to continously improve our services, provide a safe work environment for our employees, and efficiently manage our business process and supplier selection retention. It is our goal to posture
                    our company for market expansion, thereby providing improved job security and quality for all.
                </ScrollAnimation>
            </h5>
            <br />
            <div style={{ textAlign: "center" }}>
                <Link id="aboutuspagebtn" to="/about" className="btn">Learn More</Link>
            </div>

            <br />

            <div className="text-center">
                <img src={proudlycanadian} width="250" alt="proudlycanadian" />

                <br />

                <br/>

                <h3 style={{ textTransform: "uppercase", fontWeight: "lighter" }}>
                    <ScrollAnimation animateIn="bounceInLeft" delay={200}>
                        Proudly Canadian
                </ScrollAnimation>
                </h3>

            </div>



            <br />

        </div>
    )
}
export default About;