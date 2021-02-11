import React from 'react';



import Logo from '../UI/logo2.JPEG XR';

import footerimg from '../UI/footerimg.JPEG XR';

import '../Styling/Footer.css';


const Footer = () => {



    return (
        <div style={{ backgroundColor: "#292b2c",color:"white" }}>
            <br />

            <br />
            <br />


            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="logoFooter" src={Logo} alt="Alum tech" />
                    </div>
                    <div className="col-md-6">
                        <div id="footerIcons" style={{ display:"flex" }}>
                            <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: '#3b5998' }} href="https://www.facebook.com/Alumtec-Glazing-Solutions-Inc-178695453707366" role="button"><i className="fab fa-facebook-f" /></a>
                            {/* Twitter */}
                            <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: '#55acee' }} href="#!" role="button"><i className="fab fa-twitter" /></a>
                            {/* Instagram */}
                            <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: '#ac2bac' }} href="https://www.instagram.com/alumtec.glazing/?igshid=7ma5tij5gat&fbclid=IwAR2yE9z1qHnMCKjRmlcEZzMnAWnz87Wy_R8vpU_FpGGgegQ7zBXVFRXD0H0" role="button"><i className="fab fa-instagram" /></a>
                            {/* Linkedin */}
                            <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: '#0082ca' }} href="https://www.linkedin.com/in/alumtec-glazing-solution-inc-13525a206/?fbclid=IwAR1qMIlSO4reETpENiowrw_bRZ0LNbZ0zwsagfIC03CUF2wYyo7A26DRNGA" role="button"><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <hr/>
                <br/>
                <div className="row">
                    {/* <div className="col-md-3">
                        <img id="imageFooterRow" src={footerimg} alt=""/>
                    </div> */}
                    <div className="col-md-6 col-sm-6">
                        <ul>
                            <li style={{fontWeight:"bolder"}}>HEAD OFFICE</li>
                            <li>Alumtec Glazing Solutions Inc.</li>
                            <li>Address:  104-3300 Hwy 7, Suit#348</li>
                            <li>Concord ON. L4K 0G2</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <ul>
                            <li style={{fontWeight:"bolder"}}>CONTACT</li>
                            <li>Tel: (905) 508-8777</li>
                            <li>Customer service: (905)508-8700</li>
                            <li>Fax: (866) 831-0737</li>
                            <li>E-mail: info@alumtec.ca</li>
                        </ul>
                    </div>
                    {/* <div className="col-md-3">
                        <ul>
                            <li style={{fontWeight:"bolder"}}>SERVICE</li>
                            <li>TOLL 1.800.565.1851</li>
                            <li>PHONE 416.743.3667</li>
                            <li>Fax: (866) 831-0737</li>
                            <li>CUSTOMER SERVICE ext 226 or 230</li>
                        </ul>
                    </div> */}
                </div>
      
                <hr/>
                <br/>
                <div className="row">
                    <h6 style={{fontWeight:"lighter"}}>© 2021 Alumtec. All rights reserved.</h6>
                </div>
            </div>

            <br />
            <br />

        </div>
    )
}
export default Footer;