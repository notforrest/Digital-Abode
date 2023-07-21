import styles from "./blog-post-header.module.css";

type BlogPostHeaderProps = {
  index: number;
  date: string;
};

export default function BlogPostHeader({ index, date }: BlogPostHeaderProps) {
  const formattedDate = new Intl.DateTimeFormat(...[,], { dateStyle: "long" }).format(
    new Date(date)
  );

  return (
    <div className={styles.main}>
      <div className={styles.header}>{`Blog Entries: Week ${index}`}</div>
      <div className={styles.date}>{formattedDate}</div>
    </div>
  );
}
