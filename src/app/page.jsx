'use client'
import React, { useEffect, useRef, useState } from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'
import { signInEmailPassword } from "@/firebase/auth/signin";
import { useAuthContext } from "@/context/AuthContext";

function Page() {
  const type = {
    SIGNUP: 'Sign up',
    SIGNIN: 'Sign in'
  }

  const authContext = useAuthContext()
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const router = useRouter()
  const [formType, setFormType] = useState(type.SIGNIN)

  const handleForm = async () => {
    const email = emailRef.current.value
    const password = passwordRef.current.value

    const { result, err } = formType === type.SIGNUP ? await signUp(email, password) : await signInEmailPassword(email, password)


    if (result !== null) {
      authContext.setUser(result.user)
      console.log(authContext.user)
      alert("User created successfully")
      router.push("/admin")
    }
  }

  return (
    <div className="wrapper">
      <div className="bg-gray-300">
        <h1 className="mt-60 mb-30">Authentication Form</h1>
        <form className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input ref={emailRef} required type="email" name="email" id="email" placeholder="example@mail.com" />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input ref={passwordRef} required type="password" name="password" id="password" placeholder="password" />
          </label>
          <div className="flex gap-4">
            <button type="button" onClick={handleForm}>{formType}</button>
            {formType === type.SIGNIN
              ? <button type="button" onClick={() => setFormType(type.SIGNUP)}>Don't Have Account?</button>
              : <button type="button" onClick={() => setFormType(type.SIGNIN)}>Have Account?</button>}
          </div>
        </form>
      </div>
    </div>);
}

export default Page; 
