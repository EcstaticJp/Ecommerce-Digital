import {
  
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils.js";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";

const SignIn = () => {
  

  const logGooglePopupUser = async () => {
    console.log("signin with google popup clicked");
    const { user } = await signInWithGooglePopup();
    console.log("displaying user details from google popup", user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1> Sign in page</h1>
      <button onClick={logGooglePopupUser}>Sign in with Google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
