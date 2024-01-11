"use client";

import { auth } from "@/firebase";
import styles from "@/styles/NavBar.module.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AuthButton = () => {
  const [user, setUser] = useState(false);
  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    setUser(!!user);
  });

  const out = () => {
    signOut(auth);

    router.push("/");
  };

  return (
    <>
      {user ? (
        <p onClick={out} className={styles.link + " " + styles.right}>
          Sign Out
        </p>
      ) : (
        <a href="/suggestions" className={styles.link + " " + styles.right}>
          Sign In
        </a>
      )}
    </>
  );
};

export default AuthButton;
