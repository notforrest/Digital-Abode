import React from "react";
import styles from "./youtube-embed.module.css";
import Link from "next/link";

type YouTubeEmbedProps = {
  embedId: string;
};

export const YoutubeEmbed = ({ embedId }: YouTubeEmbedProps) => (
  <>
    <div className={styles.video}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
    <div className={styles.caption}>
      <Link href={`https://www.youtube.com/watch?v=${embedId}`}>
        {`https://www.youtube.com/watch?v=${embedId}`}
      </Link>
    </div>
  </>
);
