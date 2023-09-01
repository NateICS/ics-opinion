import styles from "@/styles/NavBar.module.css"
import Link from "next/link"
import AuthButton from "./AuthButton"

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

      <AuthButton />
    </div>
  )
}
export default NavBar
