import firebase from "./Firebase";
import "firebase/firestore";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBx4xD52pxf0F4y0bowo27fj4_d9Yzk9Do",
    authDomain: "loginform-74bee.firebaseapp.com",
    databaseURL: "https://loginform-74bee-default-rtdb.firebaseio.com",
    projectId: "loginform-74bee",
    storageBucket: "loginform-74bee.appspot.com",
    messagingSenderId: "53064054969",
    appId: "1:53064054969:web:c39f2d2e1423b028f50368"
});
  
  
   var db =firebaseApp.firestore();
   export  { db };
  export default firebase
