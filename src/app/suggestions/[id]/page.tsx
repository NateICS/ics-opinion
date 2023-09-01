import { db } from "@/firebase"
import styles from "@/styles/Id.module.css"
import { emailToName } from "@/utils/emailToName"
import { format } from "date-fns"
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
  const { title, body, time, author } = suggestion.data()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.body}>{emailToName(author)}</p>
      <p className={styles.body}>{format(new Date(time), "dd/MM/yyyy")}</p>
      <p className={styles.body}>{body}</p>
    </div>
  )
}

export default Id
