import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const utcsLink = <Link href="https://www.cs.utexas.edu/">{"Computer Science"}</Link>;
  const damLink = (
    <Link href="https://ugs.utexas.edu/bdp/programs/dam">{"Digital Arts & Media"}</Link>
  );
  const techList = ["React", "Typescript", "HTML/CSS", "Python", "Java", "C/C++"];

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
        <div className={styles.text}>
          {"Take a look at my "}
          <Link href={"./about"}>{"resume"}</Link>
          {"!"}
        </div>
        <hr />

        <h3>{"Tech Stack"}</h3>
        <div className={styles.frameworkGrid}>
          {techList.map((tech) => (
            <div className={styles.framework}>{tech}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
