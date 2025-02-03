'use client'
import React, { useState } from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'
import SignInForm from "@/component/signin";

function Page() {

  // enum 
  const type = {
    SIGNUP: 'Sign up',
    SIGNIN: 'Sign in'
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const [formType, setFormType] = useState(type.SIGNIN)

  return (<div className="wrapper">
    <div className="bg-gray-300">
      <h1 className="mt-60 mb-30">{formType === type.SIGNIN ? type.SIGNIN : type.SIGNUP} form</h1>
      {formType === type.SIGNIN ? SignInForm() : <div> hello</div>}
    </div>
  </div>);
}

export default Page; 
