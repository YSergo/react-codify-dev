import { useState } from "react";
import styles from "./Header.module.scss";

function Header() {
  const [language, setLanguage] = useState("EN");
  const [animation, setAnimation] = useState("");
  const [svgAnimation, setSvgAnimation] = useState("");

  const switchLanguage = () => {
    setAnimation("blur-out");
    setSvgAnimation("move-down");

    setTimeout(() => {
      setLanguage((prevLanguage) => (prevLanguage === "EN" ? "RU" : "EN"));
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
        <button>Codify.Software</button>
      </nav>

      <nav className={styles.headerCenter}>
        <button>О нас</button>
        <button>Услуги</button>
        <button>Портфолио</button>
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
