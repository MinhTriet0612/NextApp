import firebase_app from "@/firebase/config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

async function signInEmailPassword(email, password) {
  let result = null,
    error = null;
  await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    result = userCredential
  }).catch((e) => {
    error = e
    alert(e.message)
  })

  localStorage.setItem('access_token', result.user.accessToken)

  return { result, error };
}

export { signInEmailPassword }
