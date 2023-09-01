import { db } from "@/firebase"
import { doc, getDoc } from "firebase/firestore"

type Params = {
  params: { id: string }
}

const getSuggestion = async (id: string) => {
  const suggestion = await getDoc(doc(db, "suggestions", id))

  if (!suggestion.exists()) {
    throw new Error("Suggestion doesn't exist.")
  }

  return suggestion
}

const Id = async ({ params: { id } }: Params) => {
  const suggestion = await getSuggestion(id)
  const { title, body } = suggestion.data()

  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  )
}

export default Id
