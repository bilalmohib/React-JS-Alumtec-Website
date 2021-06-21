import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const storage = firebase.storage();

export {
    storage,
    firebase as default
}
