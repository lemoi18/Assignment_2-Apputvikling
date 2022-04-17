import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_OyP6aD58GFbj--A0heU9T7XmxSpRZlU",
    authDomain: "assignmment2.firebaseapp.com",
    projectId: "assignmment2",
    storageBucket: "assignmment2.appspot.com",
    messagingSenderId: "324879309993",
    appId: "1:324879309993:web:d16e10599d858f99d8ddb8"
};

export const app = initializeApp(firebaseConfig);


// MARK: Firestore Reference
export const db = getFirestore(app);
