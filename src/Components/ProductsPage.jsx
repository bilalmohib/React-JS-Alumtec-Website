import React from 'react';


import Header from './Header';
import Products from './Products';

import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/AboutUsPage.css';

import products from '../UI/products.JPEG XR'

import Contact from './Contact';

import Footer from './Footer';

const ProductsPage = () => {


    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Header />
                </div>
            </div>

            <div className="animatedArrow">
                <a href="#aboutushead" style={{borderRadius:"50%", border: "0px solid #ADD8E6", fontSize: 50, backgroundColor: "transparent" }} className="btn-floating btn-large red">
                    <i className="fa fa-arrow-down" />
                </a>
            </div>

            <section className="showcase2">
                <div className="image-container">
                    <img src={products} alt="About Us" />
                </div>
                <div className="content2">
                    {/* <h1>{TEXTS[index]}</h1> */}
                    <h1 id="aboutushead">
                        <ScrollAnimation animateIn="fadeIn" delay={200}>
                            Our Products
                        </ScrollAnimation>
                    </h1>
                </div>
            </section>
            <div className="container">
                <Products />
                <Contact />
            </div>
            <Footer />
            {/* <div id="bottom"></div> */}
        </div>
    )
}
export default ProductsPage;