// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'

import { persistor } from "../store/store";
import { setCurrentUser } from "../store/user/user.action";
import { useDispatch } from "react-redux";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0jl5TQ3JQoquDMRf775x67tU2lRGvBNM",
  authDomain: "vinylstore-ca650.firebaseapp.com",
  projectId: "vinylstore-ca650",
  storageBucket: "vinylstore-ca650.appspot.com",
  messagingSenderId: "725486002220",
  appId: "1:725486002220:web:8071dbf464eb80a4beb189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
 

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInGoogle = () => signInWithPopup(auth, provider);
export const signOutUser = async() => 
{
  const dispatch = useDispatch;
  await signOut(auth);
  dispatch(setCurrentUser(null));
  await persistor.purge();
   
   
}
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);