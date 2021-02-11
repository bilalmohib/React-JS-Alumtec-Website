import React from 'react';




import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/AboutUsPage.css';


import dc from '../UI/dc.JPEG XR'
import fe from '../UI/fe.JPEG XR'
import li from '../UI/li.JPEG XR'
import so from '../UI/so.JPEG XR'



const Services = () => {


    return (
        <div>
            <div className="container">
                <div>
                    <br />
                    <hr />
                    <h1 className="text-center text-uppercase">
                        <ScrollAnimation animateIn='flipInY'
                            animateOut='flipOutY' initiallyVisible={true}>
                            Our Services
                    </ScrollAnimation>
                    </h1>
                    {/* <h5 style={{ fontWeight: "lighter", textAlign: "center" }}>
                        <ScrollAnimation animateIn='fadeIn' delay={400}>
                            AlumTech Glass and Aluminium offers a wide range of aluminium products and services.

                            All our products comply with Dubai Green Building Regulations, Dubai Civil Defense and Abu Dhabi Estidama Regulations.
                    </ScrollAnimation>
                    </h5> */}
                    <br />

                    {/* Here will be all services */}
                    <div>
                        {/* Tabs navs */}
                        <ul className="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="ex3-tab-1" data-mdb-toggle="tab" href="#ex3-tabs-1" role="tab" aria-controls="ex3-tabs-1" aria-selected="true">DESIGN AND CONSTRUCT</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="ex3-tab-2" data-mdb-toggle="tab" href="#ex3-tabs-2" role="tab" aria-controls="ex3-tabs-2" aria-selected="false">FABRICATION AND ENGINEERING</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="ex3-tab-3" data-mdb-toggle="tab" href="#ex3-tabs-3" role="tab" aria-controls="ex3-tabs-3" aria-selected="false">LOGISTICS AND INSTALLATION</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="ex3-tab-4" data-mdb-toggle="tab" href="#ex3-tabs-4" role="tab" aria-controls="ex3-tabs-4" aria-selected="false">SUPPLY ONLY</a>
                            </li>
                        </ul>
                        {/* Tabs navs */}
                        {/* Tabs content */}
                        <div className="tab-content" id="ex2-content">
                            <div className="tab-pane fade show active" id="ex3-tabs-1" role="tabpanel" aria-labelledby="ex3-tab-1">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-7">
                                            <h1>
                                                <ScrollAnimation animateIn='bounceInRight' delay={400} initiallyVisible={true}>
                                                    DESIGN AND CONSTRUCT
                                                </ScrollAnimation>
                                            </h1>
                                            <h5 style={{ fontWeight: "lighter" }}>
                                                <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
                                                    Alumtec Glazing solution Inc. offer a complete range of engineering services to our client include the
                                                initial design that offering most economical solutions and meet or exceed the building codes. <br /> <br />
                                                With our professional and expert designers, we provide to our client a complete detailed shop drawings,
                                                production drawings and as build drawings.
                                                </ScrollAnimation>
                                            </h5>
                                        </div>
                                        <div className="col-md-5">
                                            <img src={dc} width="100%" height="300" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ex3-tabs-2" role="tabpanel" aria-labelledby="ex3-tab-2">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-7">
                                            <h1>
                                                <ScrollAnimation animateIn='bounceInRight' delay={400} initiallyVisible={true}>
                                                    FABRICATION AND ENGINEERING
                                                </ScrollAnimation>
                                            </h1>
                                            <h5 style={{ fontWeight: "lighter" }}>
                                                <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
                                                    We are dealing with most leading manufactures in Ontario that provide most the best quality for different type
                                                    of aluminum product.
                                                    Also our intimate relationship with our suppliers ensures we can always deliver quality and on time
                                                    facade systems to our clients.
                                                </ScrollAnimation>
                                            </h5>
                                        </div>
                                        <div className="col-md-5">
                                            <img src={fe} width="100%" height="300" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ex3-tabs-3" role="tabpanel" aria-labelledby="ex3-tab-3">

                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-7">
                                            <h1>
                                                <ScrollAnimation animateIn='bounceInRight' delay={400} initiallyVisible={true}>
                                                    LOGISTICS AND INSTALLATION
                                              </ScrollAnimation>
                                            </h1>
                                            <h5 style={{ fontWeight: "lighter" }}>
                                                <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
                                                    Alumtec Glazing solution inc. using premier installers, this ensures all windows, doors, curtain wall and
                                                    other related product installed by an experienced team of installers that is following all the safety
                                                    guidelines and all is certified to work with height, using different types of installation equipment.F
                                              </ScrollAnimation>
                                            </h5>
                                        </div>
                                        <div className="col-md-5">
                                            <img src={li} width="100%" height="300" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ex3-tabs-4" role="tabpanel" aria-labelledby="ex3-tab-4">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-7">
                                            <h1>
                                                <ScrollAnimation animateIn='bounceInRight' delay={400} initiallyVisible={true}>
                                                    SUPPLY ONLY
                                                </ScrollAnimation>
                                            </h1>
                                            <h5 style={{ fontWeight: "lighter" }}>
                                                <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
                                                    <br />
                                                    Alumtec Glazing solution Inc. specializes in delivering finish product to meet any requirement for rush
                                                    and emergency project like glass replacement, windows and doors replacement and services.
                                                    <br />
                                                </ScrollAnimation>
                                            </h5>
                                        </div>
                                        <div className="col-md-5">
                                            <img src={so} width="100%" height="200" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tabs content */}
                    </div>
                    {/* Here will be all services */}

                </div>
                <br />

            </div>
        </div>
    )
}
export default Services;