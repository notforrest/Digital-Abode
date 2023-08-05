"use client";

import BlogPostHeader from "@/components/blog/blog-post-header";
import styles from "./page.module.css";
import { ScrollTopButton } from "@/components/scroll-top/scroll-top";
import { Fragment } from "react";
import * as WK8 from "./week8";
import * as WK7 from "./week7";
import * as WK6 from "./week6";
import * as WK5 from "./week5";
import * as WK4 from "./week4";
import * as WK3 from "./week3";
import * as WK2 from "./week2";
import * as WK1 from "./week1";

const blogPosts = [WK8, WK7, WK6, WK5, WK4, WK3, WK2, WK1];

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
