"use client";

import Link from "next/link";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@/components/pdf-viewer/pdf-viewer"), {
  ssr: false,
});

export default function Resume() {
  return (
    <div className={styles.main}>
      <h3>Resume</h3>
      <PDFViewer file={"resume.pdf"} />
      <Link
        className={styles.resumeLink}
        href="resume.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        Click here to open in new tab
      </Link>
    </div>
  );
}
