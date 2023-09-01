import styles from "@/styles/Suggestions.module.css"
import { emailToName } from "@/utils/emailToName"
import { format } from "date-fns"
import { QueryDocumentSnapshot } from "firebase/firestore"
import Link from "next/link"

const Suggestion = ({ suggestion }: { suggestion: QueryDocumentSnapshot }) => {
  const { title, body, author, time } = suggestion.data()

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>
        <Link href={"/suggestions/" + suggestion.id}>{title}</Link>
      </h1>

      <p className={styles.body}>{emailToName(author)}</p>
      <p className={styles.body}>{format(new Date(time), "dd/MM/yyyy")}</p>
      <p className={styles.body}>
        {body.length > 300 ? body.slice(0, 300) + "..." : body}
      </p>
    </div>
  )
}

export default Suggestion
