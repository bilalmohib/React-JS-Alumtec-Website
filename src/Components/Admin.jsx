import React, { useState, useEffect } from 'react';

import firebase from '../firebase/index';


import Header from './Header';


import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/careerPage.css';


import Logo from '../UI/logo.JPEG XR';

import Details from './Details';
import DetailsContactUs from './DetailsContactUs';
import DetailsGetInTouch from './DetailsGetInTouch';


import Footer from './Footer';

const Admin = () => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [status, setStatus] = useState(null);

    const [allJobData, setAllJobData] = useState([]);


    const [allContactUsData, setAllContactUsData] = useState([]);


    const [allGetInTouchData, setAllGetInTouchData] = useState([]);




    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setStatus(true);
                loadData();
            }
            else {
                setStatus(false)
            }
        })
    }, [])

    const reset_password = () => {
        var auth = firebase.auth();
        var emailAddress = "info@alumtec.ca";

        

        auth.sendPasswordResetEmail(emailAddress).then(function () {
            // alert(`A password reset email has been sent to ${emailAddress}.`)
        }).catch(function (error) {
            // An error happened.
            alert(error)
            // return;
        });
        alert(`A password reset email has been sent to ${emailAddress}.`)
    }

    const loadData = () => {
        let jobData = [];
        let contactUsData = [];
        let getintouch = [];
        //Taking data from job vacancy form
        firebase.database().ref(`JobVacancies/`).on('value', (snapshot) => {
            snapshot.forEach(function (data) {
                jobData.push(data.val())
            })

            //console.log(jobData);
            setAllJobData(jobData);

        })
        //Taking data from contact us form
        firebase.database().ref(`ContactUs/`).on('value', (snapshot) => {
            snapshot.forEach(function (data) {
                contactUsData.push(data.val())
            })

            //console.log(contactUsData);
            setAllContactUsData(contactUsData);

        })
        //Taking data from get in touch form
        firebase.database().ref(`GetInTouch/`).on('value', (snapshot) => {
            snapshot.forEach(function (data) {
                getintouch.push(data.val())
            })

            //console.log(getintouch);
            setAllGetInTouchData(getintouch);

        })
    }

    const login = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
               // console.log("The user is logged in and data is: " + user);
                alert("Logged in successfully")
                window.location.reload();
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                alert(errorMessage)
            });
    }

    const sign_out = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            alert("Signed Out Successfully");
            window.location.reload();

        }).catch((error) => {
            // An error happened.
            console.log(error)
            alert(error);
        });

    }
    console.log("All data is==> " + allJobData);
    return (

        <div>

            <div className="container">
                <div className="fixed-top">
                    <Header />
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            {(firebase.auth().currentUser == null) ? (
                <div>
                    <h1 className="text-center text-warning">Logged out</h1>
                </div>
            ) : (
                    <div className="text-center">
                        <h1 className="text-success">Logged in</h1>
                    </div>
                )}

            <br />

            <div className="text-center">
                {(status == true) ? (
                    <div>



                        {/* Its an important point */}
                        {/* Tabs navs */}
                        <ul className="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="ex3-tab-1" data-mdb-toggle="tab" href="#ex3-tabs-1" role="tab" aria-controls="ex3-tabs-1" aria-selected="true">Jobs Vacancy Data</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="ex3-tab-2" data-mdb-toggle="tab" href="#ex3-tabs-2" role="tab" aria-controls="ex3-tabs-2" aria-selected="false">Contact Us Form Data</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link"
                                    id="ex3-tab-3"
                                    data-mdb-toggle="tab"
                                    href="#ex3-tabs-3"
                                    role="tab"
                                    aria-controls="ex3-tabs-3"
                                    aria-selected="false"
                                >Get In Touch Form Data</a>
                            </li>
                        </ul>
                        {/* Tabs navs */}
                        {/* Tabs content */}
                        <div className="tab-content" id="ex2-content">
                            <div className="tab-pane fade show active" id="ex3-tabs-1" role="tabpanel" aria-labelledby="ex3-tab-1">
                                <div className="text-center">
                                    <br />

                                    {allJobData.map((v, i) => {
                                        return <li key={i} style={{ listStyle: "none" }}>
                                            <div style={{ display: "block" }}>
                                                {/* {console.log("key==>",i)} */}

                                                <Details
                                                    index={i}
                                                    name={v.NAME}
                                                    email={v.EMAIL}
                                                    subject={v.SUBJECT}
                                                    message={v.MESSAGE}
                                                    resumeURL={v.IMAGEURL}
                                                    time={v.currentTime}
                                                />

                                            </div>
                                        </li>
                                    })}
                                    <br />
                                    <h1 style={{ fontWeight: "lighter" }}>You are successfully logged in</h1>
                                    <button className="btn btn-danger" onClick={sign_out}>Sign Out</button>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ex3-tabs-2" role="tabpanel" aria-labelledby="ex3-tab-2">
                                <div className="text-center">
                                    <br />

                                    {allContactUsData.map((v, i) => {
                                        return <li key={i} style={{ listStyle: "none" }}>
                                            <div style={{ display: "block" }}>
                                                {/* {console.log("key==>",i)} */}

                                                <DetailsContactUs
                                                    index={i}
                                                    name={v.NAME}
                                                    email={v.EMAIL}
                                                    subject={v.SUBJECT}
                                                    message={v.MESSAGE}
                                                    time={v.currentTime}
                                                />

                                            </div>
                                        </li>
                                    })}
                                    <br />
                                    <h1 style={{ fontWeight: "lighter" }}>You are successfully logged in</h1>
                                    <button className="btn btn-danger" onClick={sign_out}>Sign Out</button>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="ex3-tabs-3"
                                role="tabpanel"
                                aria-labelledby="ex3-tab-3"
                            >
                                <div className="text-center">
                                    <br />

                                    {allGetInTouchData.map((v, i) => {
                                        return <li key={i} style={{ listStyle: "none" }}>
                                            <div style={{ display: "block" }}>
                                                {/* {console.log("key==>",i)} */}

                                                <DetailsGetInTouch
                                                    index={i}
                                                    name={v.NAME}
                                                    email={v.EMAIL}
                                                    phone={v.PHONE}
                                                    company={v.COMPANY}
                                                    message={v.MESSAGE}
                                                    time={v.currentTime}
                                                />

                                            </div>
                                        </li>
                                    })}
                                    <br />
                                    <h1 style={{ fontWeight: "lighter" }}>You are successfully logged in</h1>
                                    <button className="btn btn-danger" onClick={sign_out}>Sign Out</button>
                                </div>
                            </div>
                        </div>
                        {/* Tabs content */}
                        {/* Its an important point */}





                    </div>
                ) : (
                        <div>
                            <img width="200px" src={Logo} alt="Alum Tech" />
                            <br /> <br />
                            {/* <label className="form-label">Email Address (required)</label> <br/> */}
                            <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} className="form-control-lg" />
                            <br /><br />
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="form-control-lg" />
                            <br />
                            <br />
                            <a href="" onClick={reset_password}>Forgot Password</a>
                            <br />
                            <br />
                            <button className="btn btn-primary btn-lg" onClick={login}>Login</button>
                            <br />


                        </div>
                    )}
            </div>


            <br />
            <br />
            <br />

            <div className="container">

            </div>

            <Footer />

        </div>
    )
}
export default Admin;