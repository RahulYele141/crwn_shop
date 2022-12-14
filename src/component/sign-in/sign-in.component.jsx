import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../sign-up-form/sign-up-form.component';
import Button from '../button/button.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Button buttonType="google" onClick={logGoogleUser}>
        Sign In with Google
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
