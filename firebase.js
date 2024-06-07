import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
   apiKey: "AIzaSyCl_ra_94wntoPMKB4TQn54ysKtXUq0kTQ",
   authDomain: "adore-chat.firebaseapp.com",
   projectId: "adore-chat",
   storageBucket: "adore-chat.appspot.com",
   messagingSenderId: "376230634544",
   appId: "1:376230634544:web:5240bbcf2cc30f3943b9f5",
   measurementId: "G-C2T635XCR6"
 };


let app;

if (firebase.apps.length === 0 ) {
   app = firebase.initializeApp(firebaseConfig);
}else {
   app= firebase.app()
}
const db = app.firestore();
const auth = firebase.auth();
export {db, auth}
