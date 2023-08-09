"use client";

import styles from "./page.module.css";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@/components/pdf-viewer/pdf-viewer"), {
  ssr: false,
});

export default function About() {
  return (
    <div className={styles.main}>
      <div>Resume</div>
      <PDFViewer file={"resume-v6.pdf"} />
    </div>
  );
}
