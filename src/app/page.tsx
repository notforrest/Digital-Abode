import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h2>Home Page</h2>
        <div>Hello, world!</div>
        <div>I am Forrest Sun.</div>
        <div className={styles.imgContainer}>
          <Image alt="Main Picture" src={"/main.JPG"} fill />
        </div>
      </div>
    </div>
  );
}
