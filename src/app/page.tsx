import styles from "@/styles/Home.module.css"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ICS Opinion",
}

const Home = () => {
  return (
    <>
      <h1 className={styles.header}>Welcome!</h1>
      <p className={styles.body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget ex
        vitae odio dapibus placerat. Maecenas pellentesque porta lacus. Donec
        eget mi mi. Sed non ex lorem. Nulla vitae est volutpat, maximus velit
        id, rutrum felis. Aenean nec quam rutrum, consequat mi in, sodales
        ipsum. Curabitur lacinia nunc sed felis suscipit, a pellentesque dolor
        condimentum. Donec sed sodales mi, vel egestas eros. Etiam quis nunc ac
        augue pharetra dapibus. Quisque ipsum turpis, tempus a interdum id,
        convallis quis ligula. Maecenas mollis lacus at nulla faucibus faucibus.
        Nunc at iaculis leo. Donec blandit rutrum feugiat. In rhoncus laoreet
        vestibulum.
      </p>

      <div className={styles.grid}>
        <Link href={"/suggestions"} className={styles.card}>
          <p className={styles.text}>Suggestions</p>
        </Link>
        <Link href={"/polls"} className={styles.card}>
          <p className={styles.text}>Polls</p>
        </Link>
      </div>
    </>
  )
}

export default Home
