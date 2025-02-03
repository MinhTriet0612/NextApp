'use client'

import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import DashBoard from "./addData";

export default function Page() {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    console.log(user)
    if (!user) {
      router.push('/')
    }
  }, [user])

  return (
    <div>
      <h1>Only logged in users can view this page</h1>
      <DashBoard />
    </div>
  )
}
