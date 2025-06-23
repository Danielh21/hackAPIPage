import React, { useEffect, useState } from "react";
import styles from "../style.module.scss";

export const Loading = () => {
  const [dots, setDots] = useState<string>("");

  useEffect(() => {
    const interVal = setInterval(() => {
      if (dots.length > 4) {
        setDots("");
      } else {
        setDots(dots + ".");
      }
    }, 300);
    return () => {
      clearInterval(interVal);
    };
  }, [dots]);

  return (
    <div className={styles.loadingContainer}>
      <span className={styles.loadingText}> 👨🏻‍💻 Loading{dots}</span>
      <span className={styles.spinner} role="img" aria-label="rocket">
        👾
      </span>
    </div>
  );
};
