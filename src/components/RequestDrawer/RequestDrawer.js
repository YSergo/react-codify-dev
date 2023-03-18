import React from "react";
import styles from "./RequestDrawer.module.scss";

function RequestDrawer({ onClose, isOpen }) {
  
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      onClick={onClose}
      className={`${styles.overlay} ${isOpen ? styles.visible : ""}`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`${styles.requestDrawer} ${isOpen ? styles.opened : ""}`}
      >
        <div className={styles.requestDrawerTop}>
          <h2>Заявка</h2>
          <svg
            onClick={onClose}
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M26 2L2 26" stroke="black" strokeWidth="3" />
            <path d="M2 2L26 26" stroke="black" strokeWidth="3" />
          </svg>
        </div>

        <div className={styles.contactForm}>
          <p className={styles.firstP}>
            Оставьте свои
            <br />
            контактные данные
          </p>
          <input placeholder="Имя" />
          <input placeholder="Телефон" />
          <input placeholder="Эл. почта" />
          <p className={styles.secondP}>Какую задачу нужно решить?</p>
          <textarea
            className={styles.requestInput}
            placeholder="Опишите задачу"
          ></textarea>{" "}
          <button>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default RequestDrawer;
