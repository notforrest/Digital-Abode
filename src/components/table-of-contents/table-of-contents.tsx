import TableOfContentsButton from "./table-of-contents-button";
import styles from "./table-of-contents.module.css";
import { useEffect, useRef, useState } from "react";

type TableOfContentsProps = {
  headings: string[];
  title: string;
};

export default function TableOfContents({ headings, title }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.getElementById("toc")?.scrollTo(0, 0);
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <>
      <div className={isOpen ? styles.tocOpen : styles.toc} id="toc" ref={ref}>
        <h3>{title}</h3>
        <hr style={{ margin: "0.5em 0" }} />
        <nav aria-label="Table of Contents">
          <ul>
            {headings.map((heading) => (
              <li key={heading}>
                <a href={`#week${heading}`} onClick={() => setIsOpen(false)}>
                  <div className={styles.tocEntry}>{`Week ${heading}`}</div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <TableOfContentsButton onClick={() => setIsOpen(!isOpen)} />
    </>
  );
}
