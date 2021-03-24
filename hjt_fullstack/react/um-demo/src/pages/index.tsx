import styles from '../global.less';
import { Link } from "umi";

export default function IndexPage() {
  return (
    <div>
      <Link to="/about">about</Link>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
