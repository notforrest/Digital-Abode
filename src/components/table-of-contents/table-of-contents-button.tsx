import { FaTableList } from "react-icons/fa6";
import styles from "./table-of-contents.module.css";

type TableOfContentsButtonProps = {
  onClick: () => void;
};

export default function TableOfContentsButton({ onClick }: TableOfContentsButtonProps) {
  return (
    <button className={styles.tocButton} onClick={onClick}>
      <FaTableList />
    </button>
  );
}
