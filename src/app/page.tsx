import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.main}>
      <h2>Home Page</h2>
      <div>Hello, world!</div>
      <div>I am Forrest Sun.</div>
      <Image alt="Main Picture" src="/main.JPG" quality={100} width={500} height={500} />
    </div>
  );
}
