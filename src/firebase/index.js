import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnzrG43_2Fhwue_dQBxNqLSqDYOQ6Tm3g",
    authDomain: "alumtech-9f4f0.firebaseapp.com",
    databaseURL: "https://alumtech-9f4f0-default-rtdb.firebaseio.com",
    projectId: "alumtech-9f4f0",
    storageBucket: "alumtech-9f4f0.appspot.com",
    messagingSenderId: "79031759259",
    appId: "1:79031759259:web:b67ce20c814e75ac44f13e",
    measurementId: "G-DRM2HGG1NH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const storage = firebase.storage();

export {
    storage,
    firebase as default
}