import styles from './RequestDrawer.module.scss';

function RequestDrawer() {
  return (
    <div className={styles.overlay}>
      <div className={styles.requestDrawer}>
        <div className={styles.requestDrawerTop}>
          <h2>Заявка</h2>
          <svg
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
