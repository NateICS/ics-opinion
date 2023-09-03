import styles from "@/styles/Home.module.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ICS Opinion",
}

const Home = () => {
  return (
    <>
      <h1 className={styles.header}>Welcome!</h1>
      <p className={styles.body}>
        ICS Opinion was created so that students like you could share your
        opinions. Feel the school should make a change? Submit a suggestion.
      </p>
    </>
  )
}

export default Home
