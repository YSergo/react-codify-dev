import Contacts from "../../components/Contacts/Contacts";
import Request from "../../components/Request/Request";
import styles from "./Portfolio.module.scss";
import img1 from "./1.png";
import img2 from "./2.png";

function Portfolio() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.card}>
          <img src={img1} alt="site" />
          <h1>Сайт</h1>
          <span>Дизайн, разработка</span>
          <button onClick={() => handleClick("https://google.com")}>
            Смотреть проект
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="28" fill="#C8EFDA" />
              <path
                d="M5.81836 14L20.3638 14"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="square"
              />
              <path
                d="M12.1816 6H15.6833L23.9998 14L15.6833 22H12.1816L20.4981 14L12.1816 6Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        <div className={styles.card}>
          <img src={img2} alt="site" />
          <h1>Сайт</h1>
          <span>Дизайн, NO-code разработка</span>
          <button onClick={() => handleClick("https://apple.com")}>
            Смотреть проект
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="28" fill="#C8EFDA" />
              <path
                d="M5.81836 14L20.3638 14"
                stroke="black"
                stroke-width="3"
                stroke-linecap="square"
              />
              <path
                d="M12.1816 6H15.6833L23.9998 14L15.6833 22H12.1816L20.4981 14L12.1816 6Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.contacts}>
        <Contacts />
        <Request />
      </div>
    </div>
  );
}

export default Portfolio;
