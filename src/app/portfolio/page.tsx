"use client";

import styles from "./page.module.css";
import { YoutubeEmbed } from "@/components/youtube-embed/youtube-embed";

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <h3>Video Portfolio</h3>
      <YoutubeEmbed embedId={"wlNURfbaulk"} />
    </div>
  );
}
