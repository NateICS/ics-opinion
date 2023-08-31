"use client"

import { auth } from "@/firebase"
import { User, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Suggestions = () => {
  const [user, setUser] = useState<User>()
  const router = useRouter()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      router.replace("/signin")
    }
  })

  return (
    <>
      {user && (
        <>
          <h1>Suggestions</h1>
          <p>sf</p>
        </>
      )}
    </>
  )
}

export default Suggestions
