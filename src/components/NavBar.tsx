import styles from "@/styles/NavBar.module.css";
import AuthButton from "./AuthButton";

const NavBar = () => {
  return (
    <div className={styles.bar}>
      <a href="/" className={styles.link + " " + styles.left}>
        ICS Opinion
      </a>

      <a href="/suggestions" className={styles.link}>
        Suggestions
      </a>

      <AuthButton />
    </div>
  );
};
export default NavBar;
