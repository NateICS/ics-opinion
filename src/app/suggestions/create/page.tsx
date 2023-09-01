"use client"

import { auth, db } from "@/firebase"
import { addDoc, collection } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

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
    <>
      <form onSubmit={submit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />

        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        />

        <button>Submit</button>
      </form>
    </>
  )
}

export default Create
