import styles from "./HeaderMobile.module.scss";
import { Link } from "react-router-dom";

const HeaderMobile = () => {
  return (
    <header className={styles.headerMobile}>
      <nav className={styles.headerLeft}>
        <Link to="/">
          <button>
            Codify
            <svg
              width="3"
              height="3"
              viewBox="0 0 3 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="black" />
            </svg>
            Software
          </button>
        </Link>
      </nav>
      <button className={styles.headerRight}>
        <svg
          width="30"
          height="18"
          viewBox="0 0 30 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30 1H0" stroke="black" />
          <path d="M30 9L6 9" stroke="black" />
          <path d="M30 17L0 17" stroke="black" />
        </svg>
      </button>
    </header>
  );
};

export default HeaderMobile;
