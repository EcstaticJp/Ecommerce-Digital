import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA0G-w-FWpsvuBtv84WrVY5eC2UbKeyaLQ",
  authDomain: "crwn-clothing-db-fd5a5.firebaseapp.com",
  projectId: "crwn-clothing-db-fd5a5",
  storageBucket: "crwn-clothing-db-fd5a5.appspot.com",
  messagingSenderId: "526885948921",
  appId: "1:526885948921:web:aff70cdb9966548c2ec128",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
//  provider.setCustomParameters({
//     prompt: "select account"
//   });

export const auth = getAuth(firebaseapp);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGooglRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,displayNamefromSignupForm) => {
  console.log("form fields from sign up form", displayNamefromSignupForm);
  if (!userAuth) return;
  // see if existing document reference
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log("userdocref from firebase", userDocRef);
  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exixts
  if (!userSnapshot.exists()) {
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();

    try {
      if (displayNamefromSignupForm != null) {
        await setDoc(userDocRef, {
          email,
          createdAt,
          displayNamefromSignupForm,
        });
      } else {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      }
    } catch (error) {
      console.log("error catching the user", error.message);
    }
  }

  // if user data exists already
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
