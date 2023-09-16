import Suggestion from "@/components/Suggestion"
import { db } from "@/firebase"
import styles from "@/styles/Suggestions.module.css"
import {
  QueryDocumentSnapshot,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore"
import Link from "next/link"

export const dynamic = "force-dynamic"

const getSuggestions = async () => {
  const suggestions: QueryDocumentSnapshot[] = []

  const snap = await getDocs(
    query(collection(db, "suggestions"), orderBy("time", "desc")),
  )

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
        {suggestions.map((suggestion, i) => (
          <Suggestion key={i} suggestion={suggestion} />
        ))}
      </div>

      <Link href={"/suggestions/create"}>
        <div className={styles.new}>
          <div className={styles.plus + " " + styles.vertical}></div>
          <div className={styles.plus + " " + styles.horizontal}></div>
        </div>
      </Link>
    </>
  )
}

export default Suggestions
