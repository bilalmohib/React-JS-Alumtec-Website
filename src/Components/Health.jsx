import React from 'react';




import Header from './Header';

import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/AboutUsPage.css';


import safety from '../UI/safety.JPEG XR'

import Contact from './Contact';

import Footer from './Footer';

const Health = () => {



    React.useEffect(() => {


    });

    return (
        <div>
            <div className="container">

                <div className="fixed-top">
                    <Header />
                </div>
            </div>
            <br />
            <br /><br />
            
            <div className="animatedArrow">
                <a href="#aboutushead" style={{borderRadius:"50%", border: "0px solid #ADD8E6", fontSize: 50, backgroundColor: "transparent" }} className="btn-floating btn-large red">
                    <i className="fa fa-arrow-down" />
                </a>
            </div>

            <section className="showcase2">
                <div className="image-container">
                    <img src={safety} alt="About Us" />
                </div>
                <div className="content2">
                    {/* <h1>{TEXTS[index]}</h1> */}
                    <h1 id="aboutushead">
                        <ScrollAnimation animateIn="fadeIn" delay={200}>
                            Health and safety
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
                            Health and safety (Safety first)
                         </ScrollAnimation>
                    </h1>
                    <br />
                    {/* <h3 style={{ textTransform: "uppercase", fontWeight: "lighter" }}>
                        <ScrollAnimation animateIn="bounceInLeft" delay={200}>
                            We make it easy for you to find the best windows and doors <br />
            to reflect your style and taste
                </ScrollAnimation>

                    </h3> */}
                    <h5 style={{ fontWeight: "lighter", textAlign: "center", lineHeight: "35px" }}>
                        <ScrollAnimation animateIn="fadeIn" delay={300}>
                            Alumtec Glazing solution inc. will provide and maintain a healthy and safe working environment with the
                            objective of minimising the number of instances of occupational accidents and illnesses and ultimately
achieving an accident-free workplace. <br />
All employees will be provided with such equipment, information, instructions, training and supervision
as is necessary to implement the policy and achieve the stated objective. <br />
Safety training is an indispensable part of an effective health and safety programme. It is essential that
every employee is trained to perform his or her job effectively and safely. All employees will be trained
in safe working practices and procedures prior to being allocated any new role. Training will include
advice on the use and maintenance of personal protective equipment appropriate to the task concerned
and the formulation of emergency contingency plans. <br />
Training sessions will be held as often as is deemed necessary and will provide another opportunity for
employees to express any fears or concerns they might have about their jobs.
                </ScrollAnimation>
                    </h5>
                </div>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}
export default Health;