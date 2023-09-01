"use client"

import { auth, db } from "@/firebase"
import { addDoc, collection } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import styles from "@/styles/Create.module.css"

const Create = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const router = useRouter()

  const submit = async (e: FormEvent) => {
    e.preventDefault()

    const doc = await addDoc(collection(db, "suggestions"), {
      title,
      body,
      author: auth.currentUser?.email,
      time: Date.now(),
    })

    router.push("/suggestions/" + doc.id)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={submit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className={styles.input}
        />

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
          className={styles.input + " " + styles.body}
        />

        <button className={styles.button}>Submit</button>
      </form>
    </div>
  )
}

export default Create
