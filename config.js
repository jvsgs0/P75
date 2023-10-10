import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAh_7gdQxsVOuP5wavKi66gbnq4_MNn744",
  authDomain: "endless-v2-732eb.firebaseapp.com",
  projectId: "endless-v2-732eb",
  storageBucket: "endless-v2-732eb.appspot.com",
  messagingSenderId: "279629317391",
  appId: "1:279629317391:web:13d22f8792458ab424ea7a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
