import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth"


const firebaseConfig  = {
    apiKey: "AIzaSyCazqlwbz3QmahfCUEoRRzqwX8NLJmdiQU",
    authDomain: "crwn-db-e29e3.firebaseapp.com",
    projectId: "crwn-db-e29e3",
    storageBucket: "crwn-db-e29e3.appspot.com",
    messagingSenderId: "889710374753",
    appId: "1:889710374753:web:bea4cceb4b11abddaadf20"
};
  
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase