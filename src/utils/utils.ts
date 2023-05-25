import {
  ApplicationVerifier,
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { auth } from '../../firebase';

declare const window: Window &
  typeof globalThis & {
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: ConfirmationResult;
  };

export const signInWithPhone = async (phone: string, appVerifier: ApplicationVerifier) => {
  await signInWithPhoneNumber(auth, phone, appVerifier)
    .then((confirmationResult: ConfirmationResult) => {
      window.confirmationResult = confirmationResult;
    })
    .catch(() => {});
};
