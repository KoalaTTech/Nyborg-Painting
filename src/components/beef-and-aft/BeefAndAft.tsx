import React from "react";
import styles from "./beef-and-aft.module.css";

const placeholderCount = 4;

export default function BeefAndAft() {
  return (
    <section className={styles.wrapper} aria-label="Before and after work examples">
      <div className={styles.column}>
        <h2 className={styles.heading}>Before</h2>
        <div className={styles.stack}>
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <div
              key={`before-${index}`}
              className={styles.placeholder}
              aria-label={`Before example ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.column}>
        <h2 className={styles.heading}>After</h2>
        <div className={styles.stack}>
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <div
              key={`after-${index}`}
              className={styles.placeholder}
              aria-label={`After example ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
