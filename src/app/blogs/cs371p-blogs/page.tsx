"use client";

import BlogPostHeader from "@/components/blog/blog-post-header";
import styles from "./page.module.css";
import { ScrollTopButton } from "@/components/scroll-top/scroll-top";
import { Fragment } from "react";
import * as WK2 from "./week2";
import * as WK1 from "./week1";

const blogPosts = [WK2, WK1];

export default function CS371pBlogs() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <ScrollTopButton />
        {blogPosts.map((blogPost) => (
          <Fragment key={blogPost.INDEX}>
            <BlogPostHeader index={blogPost.INDEX} date={blogPost.DATE} />
            {blogPost.QUESTIONS.map((question, index) => (
              <Fragment key={index}>
                <strong>{question}</strong>
                <i>{blogPost.ANSWERS[index]}</i>
              </Fragment>
            ))}
            <hr />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
