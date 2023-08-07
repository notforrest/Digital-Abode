// import { FaTableList } from "react-icons/fa6";
import styles from "./table-of-contents.module.css";

type TableOfContentsProps = {
  headings: string[];
  title: string;
};

export const TableOfContents = ({ headings, title }: TableOfContentsProps) => {
  return (
    <div className={styles.toc}>
      <h3>{title}</h3>
      <hr style={{ margin: "0.5em 0" }} />
      <nav aria-label="Table of Contents">
        <ul>
          {headings.map((heading) => (
            <li key={heading}>
              <a href={`#week${heading}`}>{`Week ${heading}`}</a>
            </li>
          ))}
        </ul>
      </nav>
      {/* <button className={styles.tocButton}>
        <FaTableList />
      </button> */}
    </div>
  );
};
