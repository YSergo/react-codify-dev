import styles from "./About.module.scss";
import bo from "./bo.jpg";
import Request from "../../components/Request/Request";

function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <h2>Мы — команда разработчиков</h2>
        <h2 className={styles.rightAlign}> и дизайнеров,</h2>
        <p>
          которая специализируется на веб-разработке и имеет большой опыт в
          создании высококачественных продуктов для наших клиентов.
        </p>
      </div>

      <div className={styles.description}>
        <h2>Мы считаем, что наша главная цель — </h2>
        <p className={styles.leftAlign}>
          помочь вашему бизнесу развиваться, <br />
          и поэтому мы всегда стремимся к креативным
          <br />
          решениям, которые максимально эффективны
          <br />и удовлетворяют ваши потребности.
        </p>
      </div>

      <h2>Наша команда</h2>
      <div className={styles.ourTeam}>
        <div className={styles.memberCard}>
          <img src={bo} alt="person" />
          <p>Топоров Богдан Дмитриевич</p>
          <span>Co-founder Backend разработчик</span>
        </div>
        <p>Тот, кто отвечает за сервера и производительность вашего сайта</p>
        <div className={styles.buttons}>
          <button>Backend разработка</button>
          <button>Frontend разработка</button>
          <button>UX/UI дизайн</button>
        </div>
      </div>

      <div className={styles.principles}>
        <h2>Наши принципы</h2>
        <div className={styles.part}>
          <span>01</span>
          <div>
            <h3>Бизнес-ориентированность</h3>
            <p>В первую очередь думаем о бизнесе. Помогаем</p>
            <p>решить проблемы и поднять показатели.</p>
          </div>
        </div>

        <div className={`${styles.part} ${styles.part2}`}>
          <span>02</span>
          <div>
            <h3>Наблюдайте за прогрессом</h3>
            <p>Вы всегда будете отслеживать прогресс по вашему проекту. </p>
          </div>
        </div>

        <div className={`${styles.part} ${styles.part3}`}>
          <div>
            <svg
              width="129"
              height="126"
              viewBox="0 0 129 126"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M109.551 0H129V20.1494L51.0822 98.0672H125V126H0V0.301758H27.9329V81.6184L109.551 0Z"
                fill="#C8EFDA"
              />
            </svg>
          </div>
          <div className={styles.part}>
            <span>03</span>
            <div>
              <h3>Вовлеченность</h3>
              <p>
                Нам важны вы, мы фокусируемся
                <br />
                на вашем проекте, чтобы вывести
                <br />
                его на новый уровень
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.contacts}>
          <h2>Контакты</h2>
          <ul>
            <li>
              <svg alt="number" />
              <p>+7 (921) 588-62-02</p>
            </li>
            <li>
              <svg alt="telegram" />
              <p>@iambogdan</p>
            </li>
            <li>
              <svg alt="email" />
              <p>codify.software@gmail.com</p>
            </li>
          </ul>
        </div>

        <div>
          <Request />
        </div>
      </div>

      <footer>
        <ul>
          <li>+7 (921) 588-62-02</li>
          <li>@iambogdan</li>
          <li>codify.software@gmail.com</li>
        </ul>
      </footer>
    </div>
  );
}

export default About;
