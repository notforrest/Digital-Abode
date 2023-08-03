import styles from "./page.module.css";
import Image from "next/image";
import main from "../../public/main.jpg";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h2>Home Page</h2>
        <div>Hello, world!</div>
        <div>I am Forrest Sun.</div>
        <div className={styles.imgContainer}>
          <Image alt="Main Picture" src={main} fill />
        </div>
      </div>
    </div>
  );
}
