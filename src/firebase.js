import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCVmenzkjKhoYP9G12f8mbzDMM1gtcUu2M",
    authDomain: "disneyplusclone-53425.firebaseapp.com",
    projectId: "disneyplusclone-53425",
    storageBucket: "disneyplusclone-53425.appspot.com",
    messagingSenderId: "962943590405",
    appId: "1:962943590405:web:f9650c9996fb7cbc68fc6c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage;

export { auth, provider, storage };
export default db;