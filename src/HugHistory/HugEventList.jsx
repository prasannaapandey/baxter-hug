import React from "react";
import styles from "./HugEventList.module.css";

function HugEventList() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Hug Event List</h2>
      <div className={styles.imageContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb4ca64bcd17de23568fe7ac9162c40597c3e50575595222fdde9ce9a96fa41b?placeholderIfAbsent=true&apiKey=d7461f4ff0754d6cbcff4af3552e2222"
          alt="Event illustration"
          className={styles.mainImage}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/745f4a325798408d80543bbacf1852135593f5c0514bd614a697a7386fbb93c1?placeholderIfAbsent=true&apiKey=d7461f4ff0754d6cbcff4af3552e2222"
          alt="Event icon"
          className={styles.icon}
        />
      </div>
    </section>
  );
}

export default HugEventList;
