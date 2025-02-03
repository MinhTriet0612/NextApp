import firebase_app from "@/firebase/config";
import { signInWithEmailAndPassword, getAuth, signInWithCustomToken } from "firebase/auth";

const auth = getAuth(firebase_app);

async function signInEmailPassword(email, password) {
  let result = null,
    error = null;
  try {
    await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      result = userCredential
    }).catch((e) => {
      error = e
    })

    localStorage.setItem('access_token', result.user.accessToken)
  } catch (e) {
    error = e;
  }

  return { result, error };
}

async function signInWithAccessToken(accessToken) {
  let result = null,
    error = null;
  try {
    await signInWithCustomToken(auth, accessToken).then((userCredential) => {
      result = userCredential
    }).catch((e) => {
      error = e
    })
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export { signInEmailPassword, signInWithAccessToken }
