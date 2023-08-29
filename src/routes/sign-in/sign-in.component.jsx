import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils.js";


const SignIn = () => {

    const logGoogleUser = async () => {
        console.log('signin with google account clicked');
        const {user} = await signInWithGooglePopup();
        console.log('displaying user details', user);
        const userDocRef = await createUserDocumentFromAuth(user);
    }
  return (
    <div>
      <h1> Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
    </div>
  );
};

export default SignIn;