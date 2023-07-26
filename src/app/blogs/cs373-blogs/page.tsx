import BlogPostHeader from "@/components/blog/blog-post-header";
import styles from "./page.module.css";
import { ScrollTopButton } from "@/components/scroll-top/scroll-top";
import * as WK14 from "./week14";
import * as WK13 from "./week13";
import * as WK12 from "./week12";
import * as WK9 from "./week9";
import * as WK8 from "./week8";
import * as WK7 from "./week7";
import * as WK6 from "./week6";

const blogPosts = [WK14, WK13, WK12, WK9, WK8, WK7, WK6];

export default function CS373Blogs() {
  return (
    <div className={styles.main}>
      <ScrollTopButton />
      {blogPosts.map((blogPost) => (
        <>
          <BlogPostHeader index={blogPost.INDEX} date={blogPost.DATE} />
          {blogPost.QUESTIONS.map((question, index) => (
            <>
              <strong>{question}</strong>
              <i>{blogPost.ANSWERS[index]}</i>
            </>
          ))}
          <hr />
        </>
      ))}
    </div>
  );
}
