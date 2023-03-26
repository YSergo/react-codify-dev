import styles from "./About.module.scss";
import bo from "./bo.jpg";
import Request from "../../components/Request/Request";
import { useState } from "react";
import Contacts from "../../components/Contacts/Contacts";

function About({ handlePhoneClick, handleTelegramClick, handleEmailClick }) {
  const [selectedMember, setSelectedMember] = useState("sy");

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
        {selectedMember === "bt" && (
          <>
            <div className={styles.memberCard}>
              <img src={bo} alt="person" />
              <h6>Богдан Топоров</h6>
              <span>
                Co-founder <br />
                Back-end разработчик
              </span>
            </div>
            <p>
              Тот, кто разрабатывает и поддерживает серверную часть вашего сайта
              или приложения, гарантируя стабильность, эффективность и
              безопасность
            </p>
          </>
        )}
        {selectedMember === "sy" && (
          <>
            <div className={styles.memberCard}>
              <img src={bo} alt="person" />
              <h6>Сергей Якунчихин</h6>
              <span>
                Co-founder <br />
                Front-end разработчик
              </span>
            </div>
            <p>
              Тот, кто воплощает дизайн в код, обеспечивая интерактивность и
              функциональность вашего сайта или приложения
            </p>
          </>
        )}
        {selectedMember === "kl" && (
          <>
            <div className={styles.memberCard}>
              <img src={bo} alt="person" />
              <h6>Кристина Лаенко</h6>
              <span>
                Co-founder
                <br /> UX/UI Дизайнер
              </span>
            </div>
            <p>
              Тот, кто создает визуальный стиль и интерфейс вашего продукта,
              делая его удобным и привлекательным для пользователей
            </p>
          </>
        )}
        <div className={styles.buttons}>
          <button
            className={selectedMember === "bt" ? styles.selected : ""}
            onClick={() => setSelectedMember("bt")}
          >
            Back-end разработка
          </button>
          <button
            className={selectedMember === "sy" ? styles.selected : ""}
            onClick={() => setSelectedMember("sy")}
          >
            Front-end разработка
          </button>
          <button
            className={selectedMember === "kl" ? styles.selected : ""}
            onClick={() => setSelectedMember("kl")}
          >
            UX/UI дизайн
          </button>
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
            <p>
              Вы всегда будете отслеживать прогресс
              <br />
              по вашему проекту.
            </p>
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

      <div className={styles.contacts}>
        <Contacts
          handlePhoneClick={handlePhoneClick}
          handleTelegramClick={handleTelegramClick}
          handleEmailClick={handleEmailClick}
        />

        <div>
          <Request />
        </div>
      </div>
    </div>
  );
}

export default About;
