"use client"

import { auth } from "@/firebase"
import styles from "@/styles/NavBar.module.css"
import { User, onAuthStateChanged, signOut } from "firebase/auth"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Auth = () => {
  const [user, setUser] = useState<User | null>(null)

  const router = useRouter()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }
  })

  const out = () => {
    signOut(auth)

    router.push("/")
  }

  return (
    <>
      {user ? (
        <p onClick={out} className={styles.link + " " + styles.right}>
          Sign out
        </p>
      ) : (
        <Link href={"/signin"} className={styles.link + " " + styles.right}>
          Sign In
        </Link>
      )}{" "}
    </>
  )
}

export default Auth
