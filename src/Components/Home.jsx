import React from 'react';


import Header from './Header';

import SlideShow from "./SlideShow";

import About from "./About"

import Services from "./Services"

import Products from "./Products"

import Contact from "./Contact"

import Footer from "./Footer"
import ScrollAnimation from 'react-animate-on-scroll';
import fe from '../UI/fe.JPEG XR'
import li from '../UI/li.JPEG XR'
import so from '../UI/so.JPEG XR'
import dc from '../UI/dc.JPEG XR'
import '../Styling/Home.css';

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Header />
                </div>
            </div>


            <SlideShow />

            <div className="container">
                <div id="bottom"></div>
                <About />

                <Services/>

                <Products />
                <Contact />
            </div>


            <Footer />

        </div>
    )
}
export default Home;