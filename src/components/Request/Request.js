import styles from "./Request.module.scss";

function Request() {
  return (
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
  );
}

export default Request;
