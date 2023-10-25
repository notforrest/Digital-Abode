import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const utcsLink = <Link href="https://www.cs.utexas.edu/">{"Computer Science"}</Link>;
  const damLink = (
    <Link href="https://ugs.utexas.edu/bdp/programs/dam">{"Digital Arts & Media"}</Link>
  );
  const languageList = ["React", "Typescript", "HTML/CSS", "Python", "Java", "C/C++"];

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
          <Link href={"./resume"}>{"resume"}</Link>
          {"!"}
        </div>
        <hr />

        <h3>{"Tech Stack"}</h3>
        <div className={styles.frameworkGrid}>
          <div className={styles.framework}>
            <span className={styles.frameworkText}>{"Languages"}</span>
            <hr className={styles.frameworkLine} />
            <p className={styles.frameworkSublist}>
              {"React, TypeScript, HTML / CSS, Python, Java, C, C++"}
            </p>
          </div>

          <div className={styles.framework}>
            <span className={styles.frameworkText}>{"Platforms"}</span>
            <hr className={styles.frameworkLine} />
            <p className={styles.frameworkSublist}>{"Amazon Web Services, GitHub, Vercel"}</p>
          </div>

          <div className={styles.framework}>
            <span className={styles.frameworkText}>{"Programs"}</span>
            <hr className={styles.frameworkLine} />
            <p className={styles.frameworkSublist}>
              {"Visual Studio Code, DevTools, JetBrains, Adobe Premiere Pro, Figma"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
