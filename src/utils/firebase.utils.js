import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider  } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA0G-w-FWpsvuBtv84WrVY5eC2UbKeyaLQ",
    authDomain: "crwn-clothing-db-fd5a5.firebaseapp.com",
    projectId: "crwn-clothing-db-fd5a5",
    storageBucket: "crwn-clothing-db-fd5a5.appspot.com",
    messagingSenderId: "526885948921",
    appId: "1:526885948921:web:aff70cdb9966548c2ec128"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);
  
  const provider = new GoogleAuthProvider();
//  provider.setCustomParameters({
//     prompt: "select account"
//   });

   const auth = getAuth(firebaseapp);
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
        // see if existing document reference
        const userDocRef = doc(db, 'users', userAuth.uid);
        console.log(userDocRef);
        const userSnapshot = await getDoc(userDocRef);
        console.log(userSnapshot);
        console.log(userSnapshot.exists());

        // if user data does not exixts
        if(!userSnapshot.exists()) {
            const {displayName, email, uid} = userAuth;
            const createdAt = new Date();

            try{
                await setDoc(userDocRef, {
                    displayName, email, createdAt
                });
            }
            catch(error) {
                console.log('error catching the user', error.message);
            }
        }

        // if user data exists already
        return userDocRef
  }

  