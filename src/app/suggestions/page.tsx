import { db } from "@/firebase";
import styles from "@/styles/Suggestions.module.css";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import Handler from "./Handler";

export const dynamic = "force-dynamic";

const getSuggestions = async () => {
  const suggestions: any = [];

  const snap = await getDocs(
    query(collection(db, "suggestions"), orderBy("time", "desc")),
  );

  snap.forEach((suggestion) => {
    suggestions.push({ id: suggestion.id, ...suggestion.data() });
  });

  return suggestions;
};

const Suggestions = async () => {
  return (
    <>
      <Handler suggestions={await getSuggestions()} />

      <Link href={"/suggestions/create"}>
        <div className={styles.new}>
          <div className={styles.plus + " " + styles.vertical}></div>
          <div className={styles.plus + " " + styles.horizontal}></div>
        </div>
      </Link>
    </>
  );
};

export default Suggestions;
