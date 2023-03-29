import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  const [language, setLanguage] = useState("0");
  const [animation, setAnimation] = useState("");
  const [svgAnimation, setSvgAnimation] = useState("");

  const location = useLocation();
  const isSelected = (path) => location.pathname === path;

  const switchLanguage = () => {
    setAnimation("blur-out");
    setSvgAnimation("move-down");

    setTimeout(() => {
      setLanguage((prevLanguage) => (prevLanguage === "0" ? "1" : "0"));
      setAnimation("blur-in");
    }, 300);

    setTimeout(() => {
      setSvgAnimation("move-up");
    }, 600);

    setTimeout(() => {
      setAnimation("");
      setSvgAnimation("");
    }, 1200);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.headerLeft}>
        <Link to="/">
          <button>Codify.Software</button>
        </Link>
      </nav>

      <nav className={styles.headerCenter}>
        <Link to="/About">
          <button className={isSelected("/About") ? styles.selected : ""}>
            О нас
          </button>
        </Link>

        <Link to="/Services">
          <button className={isSelected("/Services") ? styles.selected : ""}>
            Услуги
          </button>
        </Link>

        <Link to="/Portfolio">
          <button className={isSelected("/Portfolio") ? styles.selected : ""}>
            Портфолио
          </button>
        </Link>
      </nav>
      <nav className={styles.headerRight}>
        <button
          onClick={switchLanguage}
          className={`${styles[animation]} ${styles[svgAnimation]}`}
        >
          <p>{language}</p>
          <svg
            width="15"
            height="8"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 1L7.5 7L1 1" stroke="black" strokeLinecap="square" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Header;
