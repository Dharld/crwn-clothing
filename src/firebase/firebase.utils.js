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

export const createUserProfile = async (userAuth, additionalData) => {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists) {
        const {
            displayName,
            email,
        } = userAuth;
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch(error) {
            console.log("Error while creating the user.\n", error.message)
        }
    }
    return userRef
}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase