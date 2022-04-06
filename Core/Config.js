import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEMVd4DZ54dzQTywO6UO0ZKS3E7UyiyCw",
    authDomain: "assignment-2-d664d.firebaseapp.com",
    projectId: "assignment-2-d664d",
    storageBucket: "assignment-2-d664d.appspot.com",
    messagingSenderId: "673021906321",
    appId: "1:673021906321:web:7cf1b88d3085bf429a1e30"
};

export const app = initializeApp(firebaseConfig);


// MARK: Firestore Reference
export const db = getFirestore(app);
