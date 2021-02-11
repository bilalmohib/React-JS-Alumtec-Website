import React, { useState, useEffect } from 'react';

import firebase from '../firebase/index';

import { storage } from '../firebase';

import Header from './Header';


import ScrollAnimation from 'react-animate-on-scroll';

import '../Styling/careerPage.css';

import career from '../UI/career.JPEG XR'


import Footer from './Footer';

const CareersPage = () => {

    const [ImageURL, setImageURL] = useState("https://firebasestorage.googleapis.com/v0/b/alumtech-9f4f0.appspot.com/o/images%2FResume-Muhammad-Bilal.pdf?alt=media&token=c79b7621-233e-4cf6-a8a6-4d8fb6ac960e");

    const [image, setImage] = useState(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            setImage(image);
        }
    }

    const handleUpload = (e) => {
        const img = image;
        if (img != null) {
            const uploadTask = storage.ref(`images/${img.name}`).put(img);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // progrss function ....
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(progress);
                },
                (error) => {
                    // error function ....
                    console.log(error);
                },
                () => {
                    // complete function ....
                    storage.ref('images').child(img.name).getDownloadURL().then(url => {
                        setImageURL(url);
                    })
                });

            /////////////////////////////////////////////////////////////////////////////////////////////////////
            alert(e.target.innerText);
            /////////////////////////////////////////////////////////////////////////////////////////////////////
        }
        else {
            alert("Please select a resume to upload");
        }
    }

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
            SUBJECT: subject,
            MESSAGE: message,
            IMAGEURL: ImageURL,
            currentTime: dateTime
        }

        //For storing all ads i.e to show at main page
        firebase.database().ref(`JobVacancies/`).push(Data);

        
        

        alert("Thank you for submitting the data.You will be informed if you are selected for the job");

        setEmail("");
        setName("");
        setSubject("");
        setMessage("");
        setImageURL("");

    }

    useEffect(() => {
        console.log("The input is :", ImageURL);
    })

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


            <br />
            <br />
            <br />
            <br />
            <img src={career} height="300" width="100%" alt="Career" />

            <div className="container">

                <div>
                    <br />
                    <hr />
                    <h1 className="text-center text-uppercase">
                        <ScrollAnimation animateIn='flipInY'
                            animateOut='flipOutY'>
                            Job Vacancy
                    </ScrollAnimation>
                    </h1>
                    <h4 id="bottom" style={{ fontWeight: "normal", textAlign: "left" }}>
                        <ScrollAnimation animateIn='fadeIn' delay={400}>
                            Apply here
                    </ScrollAnimation>
                    </h4>
                    <br />
                    <h6 style={{ fontWeight: "lighter", textAlign: "left" }}>
                        <ScrollAnimation animateIn='bounceInRight' delay={400}>
                            Apply To apply for this position, please send your résumé to alumtech@alumtech.com and mention the position reference code in the subject line.
                        </ScrollAnimation>
                    </h6>
                    <br />

                    <label className="form-label">Your Name (required)</label>
                    <input type="text" placeholder="Enter your name here" onChange={(e) => setName(e.target.value)} className="form-control" />

                    <br />
                    <label className="form-label">Email (required)</label>
                    <input type="email" placeholder="Enter your email here" onChange={(e) => setEmail(e.target.value)} className="form-control" />

                    <br />
                    <label className="form-label">Subject</label>
                    <input type="text" placeholder="Enter your subject here" onChange={(e) => setSubject(e.target.value)} className="form-control" />

                    <br />
                    <label className="form-label">Your Message</label>
                    <textarea className="form-control" placeholder="Enter your message" onChange={(e) => setMessage(e.target.value)} rows="5"></textarea>

                    <br />

                    <br />

                    {/* Here the uploaded image will be here */}
                    <div style={{ maxWidth: "90%" }} id="logindiv">
                        <progress style={{ width: "100%", borderRadius: "2px" }} className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" value={progress} max="100" />
                        <br />

                        <label className="form-label">Resume</label>
                        <input type="file" placeholder="Enter your name here" className="form-control" onChange={(e) => handleChange(e)} />
                        <br />
                        <button className="btn btn-primary" onClick={(e) => handleUpload(e)}>Upload</button>
                        <br />
                        <br />
                        {/* <iframe src={ImageURL} width="100%" height="500px">
                        </iframe> */}
                    </div>
                    {/* Here the uploaded image will be here */}

                    <br />


                    {(name == "" || email == "" || subject == "" || message == "" || ImageURL == "https://firebasestorage.googleapis.com/v0/b/alumtech-9f4f0.appspot.com/o/images%2FResume-Muhammad-Bilal.pdf?alt=media&token=c79b7621-233e-4cf6-a8a6-4d8fb6ac960e") ? (
                        <div>
                            <button disabled={true} className="btn btn-dark btn-lg" onClick={sendData}>Submit</button>
                            <p className="text-danger">* Please fill all the fields to submit the resume at alumtech</p>
                        </div>
                    ) : (
                            <div>
                                <button className="btn btn-success btn-lg" onClick={sendData}>Submit</button>
                            </div>
                        )}






                    <br />

                    <br />



                </div>


            </div>
            <Footer />
            {/* <div id="bottom"></div> */}
        </div>
    )
}
export default CareersPage;