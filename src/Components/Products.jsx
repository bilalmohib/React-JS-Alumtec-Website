import React from 'react';



import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/Products.css';



import cwf from '../UI/cwf.JPEG XR'
import aw from '../UI/aw.JPEG XR'
import ad from '../UI/ad.JPEG XR'
import asf from '../UI/asf.JPEG XR'
import agr from '../UI/agr.JPEG XR'
import ip from '../UI/ip.JPEG XR'

const Products = () => {



    React.useEffect(() => {


    });

    return (
        <div>
            <br />
            <hr />
            <h1 className="text-center text-uppercase">
                <ScrollAnimation animateIn='flipInY'
  animateOut='flipOutY'>
                    Our Products
                </ScrollAnimation>
            </h1>
            <h5 style={{ fontWeight: "lighter", textAlign: "center" }}>
                <ScrollAnimation animateIn='fadeIn' delay={400}>
                    AlumTec Glass and Aluminium offers a wide range of aluminium products and services.

                    All our products comply with Dubai Green Building Regulations, Dubai Civil Defense and Abu Dhabi Estidama Regulations.
                </ScrollAnimation>
            </h5>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={aw} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    Aluminum windows
                                </div>
                                <div className="imageDisc">
                                    <ul>
                                        <li>Fixed punch windows</li>
                                        <li>Operable casement</li>
                                        <li>Horizontal & vertical sliding windows</li>
                                        <li>Tilt and turn windows</li>
                                        <li>Vinyl window ( Energy star windows)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={ad} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    Aluminum doors
                                </div>
                                <div className="imageDisc">
                                    <ul>
                                        <li>Thermally broken Swing doors</li>
                                        <li>Commercial doors</li>
                                        <li>Balcony / Patio sliding doors</li>
                                        <li>Automatic sliding doors</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={cwf} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    Curtain wall façade:
                                </div>
                                <div className="imageDisc">
                                    <ul>
                                        <li>Conventional CW systems</li>
                                        <li>Semi-structural (horizontal)</li>
                                        <li>Semi-structural (vertical)</li>
                                        <li>Full structural facade</li>
                                        <li>Spider facade</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={asf} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    Aluminum Storefront
                                </div>
                                <div className="imageDisc">
                                    <ul>
                                        <li>Exterior thermally broken entrances</li>
                                        <li>Pocket glazed entrances</li>
                                        <li>Commercial and retail store front</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={ip} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                Internal Partitions
                                </div>
                                <div className="imageDisc">
                                    <ul>
                                        <li>Curved frameless glass partitions</li>
                                        <li>Aluminium framed glass partitions</li>
                                        <li>Frameless glass partitions</li>
                                        <li>Shower enclosure and mirrors</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={agr} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    Aluminium and glass railing
                                </div>
                                <div className="imageDisc">
                                    <ul>
                                        <li>Straight glass balustrade</li>
                                        <li>Curved glass balustrade</li>
                                        <li>Glass balustrade for staircase</li>
                                        <li>Aluminium pickets handrail</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products;