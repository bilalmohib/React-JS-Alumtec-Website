import React from 'react';




import Header from './Header';


import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/AboutUsPage.css';


import aboutimg from '../UI/about.JPEG XR'

import Contact from './Contact';

import Footer from './Footer';

const AboutUsPage = () => {



    React.useEffect(() => {


    });

    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Header />
                </div>
            </div>

            <div className="animatedArrow">
                <a href="#bottom" style={{borderRadius:"50%", border: "0px solid #ADD8E6", fontSize: 50, backgroundColor: "transparent" }} className="btn-floating btn-large red">
                    <i className="fa fa-arrow-down" />
                </a>
            </div>

            <section className="showcase2">
                <div className="image-container">
                    <img src={aboutimg} alt="About Us" />
                </div>
                <div className="content2">
                    {/* <h1>{TEXTS[index]}</h1> */}
                    <h1 id="aboutushead">
                        <ScrollAnimation animateIn="fadeIn" delay={200}>
                            About Us
                        </ScrollAnimation>
                    </h1>
                </div>
            </section>
            <div className="container">
                <div>
                    <br />
                    <br />
                    <h1 style={{ textTransform: "uppercase", textAlign: "center" }}>
                        <ScrollAnimation delay={400}
                            animateIn='flipInX'
                            animateOut='flipOutY'
                        >
                            We make it easy for you to find the best windows and doors
                            to reflect your style and taste
                         </ScrollAnimation>
                    </h1>
                    <br />
                    {/* <h3 style={{ textTransform: "uppercase", fontWeight: "lighter" }}>
                        <ScrollAnimation animateIn="bounceInLeft" delay={200}>
                            We make it easy for you to find the best windows and doors <br />
            to reflect your style and taste
                </ScrollAnimation>
                    </h3> */}
                    <span id="bottom"></span>
                    <h5 style={{ fontWeight: "lighter", textAlign: "center", lineHeight: "35px" }}>
                        <ScrollAnimation animateIn="fadeIn" delay={300}>
                        Alumtec Glazing solution Inc. is a leading aluminum and glass solutions provider offering a wide
                    range of aluminum and glass products and services.We specialize in
                    design, fabrication and installation of aluminum windows, woors and curtain wall
                    for commercial and residential applications.
                    We are committed towards quality and customer service. <br/> Quality is not just another goal, it is our basic
                    strategy for survival and future as it’s our journey to the Total Quality Management.
                    It is our long-term commitment to continously improve our services, provide a safe work environment for our employees, and efficiently manage our business process and supplier selection retention. It is our goal to posture
                    our company for market expansion, thereby providing improved job security and quality for all.
                </ScrollAnimation>
                    </h5>
                </div>
                <Contact />
            </div>
            <Footer />
         
        </div>
    )
}
export default AboutUsPage;