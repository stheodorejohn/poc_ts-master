// import firebase from 'firebase';
// import firebase from 'firebase';

// import firebase from "firebase/app";

// import * as database from  "firebase/database";

import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';


const firebaseConfig = {
    apiKey: "AIzaSyBJpT0JxKY7SDhUi_dPBzvSv6qRbSs5gWc",
    authDomain: "final-form-233bc.firebaseapp.com",
    projectId: "final-form-233bc",
    storageBucket: "final-form-233bc.appspot.com",
    messagingSenderId: "198369737168",
    appId: "1:198369737168:web:0df31c217a1cb7294f61d5",
    measurementId: "G-B2GXD27S9E"
  };
	
firebase.initializeApp(firebaseConfig); 
// var database = firebase.database();
export default firebase.database();