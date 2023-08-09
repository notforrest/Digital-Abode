import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const utcsLink = <a href="https://www.cs.utexas.edu/">{"Computer Science"}</a>;
  const damLink = <a href="https://ugs.utexas.edu/bdp/programs/dam">{"Digital Arts & Media"}</a>;

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.imgContainer}>
          <Image alt="Main Picture" src={"/main.jpeg"} fill objectFit="contain" />
        </div>
        <div className={styles.text}>
          {"I'm from Houston, TX and I am a"} {utcsLink}
          {" major at UT Austin getting a certificate in "} {damLink}
        </div>
      </div>
    </div>
  );
}
