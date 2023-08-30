import Link from "next/link"
import styles from "@/styles/NavBar.module.css"
import Auth from "./Auth"

const NavBar = () => {
  return (
    <div className={styles.bar}>
      <Link href={"/"} className={styles.link + " " + styles.left}>
        ICS Opinion
      </Link>
      <Link href={"/suggestions"} className={styles.link}>
        Suggestions
      </Link>
      <Link href={"/polls"} className={styles.link}>
        Polls
      </Link>

      <Auth />
    </div>
  )
}
export default NavBar
