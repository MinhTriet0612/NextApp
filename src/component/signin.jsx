'use client'

import signIn from "@/firebase/auth/signin"
import { useRouter } from "next/navigation"


export default function SignInForm() {

  const router = useRouter()

  const handleForm = (e) => {
    e.preventDefault()
    const { result, err } = signIn(email, password)

    if (err !== null) {
      alert(err.message)
    }

    if (result !== null) {
      alert("User created successfully")
      router.push("/admin")
    }
  }


  return <form onSubmit={handleForm} className="form">
    <label htmlFor="email">
      <p>Email</p>
      <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
    </label>
    <label htmlFor="password">
      <p>Password</p>
      <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
    </label>
    <button type="submit">Sign in</button>
  </form>
}
