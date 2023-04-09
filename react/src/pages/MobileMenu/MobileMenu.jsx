import styles from "./MobileMenu.module.scss";
import { Link, useLocation } from "react-router-dom";

function MobileMenu({ onClose, setDrawerOpened, setOrigin }) {
  const location = useLocation();
  const isSelected = (path) => location.pathname === path;
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <nav className={styles.headerLeft}>
          <Link to="/">
            <button onClick={onClose}>
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
        <svg
          className={styles.headerRight}
          onClick={onClose}
          viewBox="0 1 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M26 2L2 26" stroke="black" strokeWidth="2" />
          <path d="M2 2L26 26" stroke="black" strokeWidth="2" />
        </svg>
      </div>
      <div className={styles.content}>
        <nav className={styles.menu}>
          <Link to="/about">
            <button
              onClick={onClose}
              className={isSelected("/about") ? styles.selected : ""}
            >
              <span>О нас</span>
            </button>
          </Link>

          <Link to="/services">
            <button
              onClick={onClose}
              className={isSelected("/services") ? styles.selected : ""}
            >
              <span>Услуги</span>
            </button>
          </Link>

          <Link to="/portfolio">
            <button
              onClick={onClose}
              className={isSelected("/portfolio") ? styles.selected : ""}
            >
              <span>Портфолио</span>
            </button>
          </Link>
        </nav>
        <button
          onClick={() => {
            setOrigin("request");
            setDrawerOpened(true);
          }}
          className={styles.orderButton}
        >
          Заказать проект
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;
