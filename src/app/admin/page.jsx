'use client'

import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user])

  return (
    <div>
      <h1>Only logged in users can view this page</h1>
    </div>
  )
}
