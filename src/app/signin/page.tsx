"use client"

import { auth } from "@/firebase"
import styles from "@/styles/SignIn.module.css"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useRouter } from "next/navigation"

const SignIn = () => {
  const router = useRouter()
  const provider = new GoogleAuthProvider()

  const submit = async () => {
    await signInWithPopup(auth, provider)

    router.push("/")
  }

  return (
    <>
      <button onClick={submit} className={styles.button}>
        Sign In With Google
      </button>
    </>
  )
}

export default SignIn
