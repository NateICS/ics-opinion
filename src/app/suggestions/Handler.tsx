"use client";

import Suggestion from "@/components/Suggestion";
import styles from "@/styles/Suggestions.module.css";
import { useEffect, useState } from "react";

const Handler = ({ suggestions }: any) => {
  const [stateSuggestions, setSuggestions] = useState(suggestions);
  const [sortMethod, setSort] = useState("most");

  useEffect(() => {
    const bubbleSort = (arr: any, compare: (a: any, b: any) => boolean) => {
      let n = arr.length;

      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (compare(arr[j], arr[j + 1])) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }

      return arr;
    };

    const sort = (arr: any) => {
      if (sortMethod === "most") {
        return bubbleSort(arr, (a, b) => a.time > b.time);
      } else {
        return bubbleSort(arr, (a, b) => a.time < b.time);
      }
    };

    setSuggestions(sort(stateSuggestions));
  }, [sortMethod]);

  return (
    <div className={styles.maxContainer}>
      <select
        className={styles.select}
        onChange={(e) => {
          setSort(e.target.value);
        }}
      >
        <option value="most">Most Recent</option>
        <option value="least">Least Recent</option>
      </select>

      <div className={styles.container}>
        {stateSuggestions.map((suggestion: any) => (
          <Suggestion key={suggestion.id} suggestion={suggestion} />
        ))}
      </div>
    </div>
  );
};

export default Handler;
