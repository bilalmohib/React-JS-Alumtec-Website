import React, { useState } from 'react';

import firebase from '../firebase/index';

import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/Contact.css';


const Contact = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");



    const sendData = () => {

        ////////////////////////////To take the current date and time//////////////////////////////////
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;
        dateTime = dateTime.toString();
        ////////////////////////////To take the current date and time//////////////////////////////////

        let Data = {
            NAME: name,
            EMAIL: email,
            PHONE: phone,
            COMPANY: company,
            MESSAGE: message,
            currentTime: dateTime
        }

        //For storing all ads i.e to show at main page
        firebase.database().ref(`GetInTouch/`).push(Data);

        


        alert("Thank you for contacting Us.We will reach back to you soon.");

        setName("");
        setEmail("");
        setPhone(0);
        setCompany("");
        setMessage("");

    }

    return (
        <div>
            <br />
            <hr />
            <br />
            <br />

            <h1 className="text-center text-uppercase">
                <ScrollAnimation animateIn='flipInY'
                    animateOut='flipOutY'>
                    Get In Touch
                </ScrollAnimation>
            </h1>
            <br />


            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div>
                                    <input placeholder="NAME" inputMode="text" className="form-control inputStyle" onChange={(e) => setName(e.target.value)} type="text" />

                                </div>
                            </div>

                            <div className="col-md-6">
                                <div>
                                    <input placeholder="EMAIL" inputMode="email" onChange={(e) => setEmail(e.target.value)} className="form-control inputStyle" type="email" />

                                </div>
                            </div>
                        </div>

                        <div style={{ paddingTop: "3%" }} className="row">
                            <div className="col-md-6">
                                <div>
                                    <input placeholder="PHONE" inputMode="numeric" onChange={(e) => setPhone(e.target.value)} className="form-control inputStyle" type="number" />

                                </div>
                            </div>

                            <div className="col-md-6">
                                <div>
                                    <input placeholder="COMPANY" onChange={(e) => setCompany(e.target.value)} className="form-control inputStyle" type="text" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="col-md-4">
                        <div>
                            <textarea placeholder="MESSAGE" onChange={(e) => setMessage(e.target.value)} className="form-control" name="" id="" cols="35" rows="5"></textarea>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                            <label style={{ fontWeight: "lighter" }} className="form-check-label" htmlFor="flexCheckDefault">
                                I consent to receive future communications from Alumtec.
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">

                        {(name == "" || email == "" || phone == 0 || company == "" || message == "") ? (
                            <div>
                                <button id="submit" disabled={true} className="btn btn-dark btn-lg" onClick={sendData}>Submit</button>
                                <p className="text-danger">* Please fill all the fields to submit the form</p>
                            </div>
                        ) : (
                                <div>
                                    <button id="submit" className="btn btn-success btn-lg" onClick={sendData}>Submit</button>
                                </div>
                            )}


                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    )
}
export default Contact;