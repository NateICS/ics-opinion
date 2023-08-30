"use client"

import Link from "next/link"
import styles from "@/styles/NavBar.module.css"
import { auth } from "@/firebase"
import { User, onAuthStateChanged } from "firebase/auth"
import { useState } from "react"

const Auth = () => {
  const [user, setUser] = useState<User | null>(null)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }
  })
  return (
    <>
      {user ? (
        <p className={styles.link + " " + styles.right}>Yes</p>
      ) : (
        <Link href={"/signin"} className={styles.link + " " + styles.right}>
          Sign In
        </Link>
      )}{" "}
    </>
  )
}

export default Auth
