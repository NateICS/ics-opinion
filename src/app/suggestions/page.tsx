import Suggestion from "@/components/Suggestion"
import { db } from "@/firebase"
import styles from "@/styles/Suggestions.module.css"
import { QueryDocumentSnapshot, collection, getDocs } from "firebase/firestore"

export const dynamic = "force-dynamic"

const getSuggestions = async () => {
  const suggestions: QueryDocumentSnapshot[] = []

  const snap = await getDocs(collection(db, "suggestions"))
  snap.forEach((suggestion) => {
    suggestions.push(suggestion)
  })

  return suggestions
}

const Suggestions = async () => {
  const suggestions = await getSuggestions()

  return (
    <>
      <div className={styles.container}>
        {suggestions.map((suggestion) => (
          <Suggestion suggestion={suggestion} />
        ))}
      </div>
    </>
  )
}

export default Suggestions
