"use client";

import NavBar from "@/components/NavBar";
import { auth } from "@/firebase";
import styles from "@/styles/SignIn.module.css";
import "@/styles/globals.css";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { Heebo } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const heebo = Heebo({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isIn, setIsIn] = useState(false);

  const router = useRouter();
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user || location.pathname === "/") {
        setIsIn(true);
      }
    });
  }, []);

  return (
    <html lang="en" className={heebo.className}>
      <body>
        {isIn ? (
          <>
            <NavBar />
            <main>{children}</main>
          </>
        ) : (
          <>
            <button
              onClick={async () => {
                await signInWithPopup(auth, provider);
                router.push("/");
              }}
              className={styles.button}
            >
              Sign In With Google
            </button>

            <button className={styles.home}>
              <a href="/">Back Home</a>
            </button>
          </>
        )}
      </body>
    </html>
  );
};

export default Layout;
