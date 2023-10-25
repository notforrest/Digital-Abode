"use client";

import styles from "./page.module.css";
import { YoutubeEmbed } from "@/components/youtube-embed/youtube-embed";

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <h3 style={{ marginTop: "1em", marginBottom: 0 }}>Video Portfolio</h3>
      <span className={styles.videoTitle}>Boulderfest 2023</span>
      <YoutubeEmbed embedId={"wlNURfbaulk"} />

      <span className={styles.videoTitle}>Texas Loves HEB</span>
      <YoutubeEmbed embedId={"yx1kwu1mHm4"} />

      <span className={styles.videoTitle}>The Apple Way</span>
      <YoutubeEmbed embedId={"rVV578VLNWo"} />
    </div>
  );
}
