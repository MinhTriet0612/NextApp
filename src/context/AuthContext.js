'use client'

import React, { createContext, useEffect, useState, useContext } from "react"
import { onAuthStateChanged, getAuth } from "firebase/auth"
import firebase_app from "@/firebase/config"


const AuthContext = createContext({ user: null, setUser: () => { } })
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(firebase_app)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {loading ? <div className="">
        <p className="">Loading...</p>
      </div> : children}
    </AuthContext.Provider>
  );
};


