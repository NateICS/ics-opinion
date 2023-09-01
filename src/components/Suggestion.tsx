import styles from "@/styles/Suggestions.module.css"
import { QueryDocumentSnapshot } from "firebase/firestore"
import Link from "next/link"

const Suggestion = ({ suggestion }: { suggestion: QueryDocumentSnapshot }) => {
  const { title, body } = suggestion.data()

  return (
    <div className={styles.card}>
      <Link href={"/suggestions/" + suggestion.id}>
        <h1>{title}</h1>
      </Link>

      <p>{body}</p>
    </div>
  )
}

export default Suggestion
