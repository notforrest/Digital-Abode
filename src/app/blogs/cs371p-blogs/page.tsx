"use client";

import styles from "./page.module.css";
import BlogPostHeader from "@/components/blog/blog-post-header";
import ScrollTopButton from "@/components/scroll-top/scroll-top";
import TableOfContents from "@/components/table-of-contents/table-of-contents";
import { Fragment } from "react";
import * as WK14 from "./week14";
import * as WK13 from "./week13";
import * as WK11 from "./week11";
import * as WK10 from "./week10";
import * as WK8 from "./week8";
import * as WK7 from "./week7";
import * as WK6 from "./week6";
import * as WK5 from "./week5";
import * as WK4 from "./week4";
import * as WK3 from "./week3";
import * as WK2 from "./week2";
import * as WK1 from "./week1";

const blogPosts = [WK14, WK13, WK11, WK10, WK8, WK7, WK6, WK5, WK4, WK3, WK2, WK1];

export default function CS371pBlogs() {
  return (
    <div className={styles.page}>
      <TableOfContents
        headings={blogPosts.map((blogPost) => blogPost.INDEX.toString())}
        title={"CS371p Blogs"}
      />
      <ScrollTopButton />
      <div className={styles.blog}>
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
