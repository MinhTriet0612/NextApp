
import firebase_app from "@/firebase/config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signUp(email, password) {
  let result = null,
    error = null;
  await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    result = userCredential;
  }
  ).catch((e) => {
    error = e;
    alert(error.message);
  });

  return { result, error };
}
