import firebase_app from "@/firebase/config"

import { getFirestore, doc, setDoc } from "firebase/firestore"


const db = getFirestore(firebase_app)

export default async function addData(collection, id, data) {
  let result = null
  let error = null

  try {
    result = await setDoc(doc(db, collection, id), data, {
      merge: true,
    }).catch((e) => {
      alert("Error adding document")
      throw e
    })
  }
  catch (e) {
    error = e
  }

  return { result, error }
}


