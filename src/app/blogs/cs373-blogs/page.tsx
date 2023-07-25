import BlogPostHeader from "@/components/blog/blog-post-header";
import styles from "./page.module.css";
import * as WK14 from "./week14";
import * as WK13 from "./week13";
import * as WK12 from "./week12";
import * as WK9 from "./week9";

export default function CS373Blogs() {
  return (
    <div className={styles.main}>
      <BlogPostHeader index={14} date={"04-23-2023"} />
      {WK14.QUESTIONS.map((question, index) => (
        <div key={index}>
          <strong>{question}</strong>
          <i>{WK14.ANSWERS[index]}</i>
        </div>
      ))}

      <hr />

      <BlogPostHeader index={13} date={"04-16-2023"} />
      {WK13.QUESTIONS.map((question, index) => (
        <div key={index}>
          <strong>{question}</strong>
          <i>{WK13.ANSWERS[index]}</i>
        </div>
      ))}

      <hr />

      <BlogPostHeader index={12} date={"04-09-2023"} />
      {WK12.QUESTIONS.map((question, index) => (
        <div key={index}>
          <strong>{question}</strong>
          <i>{WK12.ANSWERS[index]}</i>
        </div>
      ))}

      <hr />

      <BlogPostHeader index={9} date={"03-12-2023"} />
      {WK9.QUESTIONS.map((question, index) => (
        <div key={index}>
          <strong>{question}</strong>
          <i>{WK9.ANSWERS[index]}</i>
        </div>
      ))}
    </div>
  );
}
