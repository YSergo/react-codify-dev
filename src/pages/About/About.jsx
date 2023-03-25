import styles from "./About.module.scss";
import bo from "./bo.jpg";
import Request from "../../components/Request/Request";
import { useState } from "react";

function About() {
  const [selectedMember, setSelectedMember] = useState("bt");

  const handlePhoneClick = () => {
    window.open("tel:+79215886202", "_blank");
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/iambogdan", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:codify.software@gmail.com";
  };

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
        <div>
          <h2>Контакты</h2>
          <ul>
            <li>
              <svg
                onClick={handlePhoneClick}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.6515 23.9966C15.9209 23.9329 11.0165 23.2551 5.88003 18.1199C0.744798 12.9834 0.0681917 8.08014 0.00329529 6.34837C-0.0928476 3.70924 1.92856 1.14584 4.26363 0.144748C4.54482 0.0233279 4.85274 -0.0229005 5.15719 0.0105993C5.46164 0.044099 5.75214 0.156176 6.00021 0.335832C7.92306 1.73711 9.24983 3.85706 10.3891 5.52394C10.6398 5.89016 10.747 6.3358 10.6902 6.77596C10.6335 7.21611 10.4168 7.62001 10.0815 7.91069L7.73679 9.65207C7.62351 9.73387 7.54377 9.85401 7.51238 9.99016C7.481 10.1263 7.5001 10.2692 7.56613 10.3924C8.09732 11.3574 9.04193 12.7947 10.1235 13.8764C11.2063 14.958 12.711 15.9651 13.7433 16.5563C13.8727 16.629 14.0251 16.6493 14.1691 16.6131C14.313 16.5769 14.4376 16.4869 14.5173 16.3616L16.0435 14.0386C16.3241 13.6659 16.7381 13.4162 17.1987 13.3418C17.6592 13.2674 18.1307 13.3741 18.5144 13.6396C20.2053 14.8101 22.1786 16.1141 23.6232 17.9636C23.8174 18.2135 23.941 18.5109 23.9809 18.8249C24.0209 19.1388 23.9758 19.4577 23.8503 19.7483C22.8444 22.0954 20.2991 24.0939 17.6515 23.9966Z"
                  fill="currentColor"
                />
              </svg>
              <p onClick={handlePhoneClick}>+7 (921) 588-62-02</p>
            </li>
            <li>
              <svg
                onClick={handleTelegramClick}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12ZM12.43 8.859C11.263 9.344 8.93 10.349 5.432 11.873C4.864 12.099 4.566 12.32 4.539 12.536C4.493 12.902 4.951 13.046 5.573 13.241C5.658 13.268 5.746 13.295 5.836 13.325C6.449 13.524 7.273 13.757 7.701 13.766C8.09 13.774 8.524 13.614 9.003 13.286C12.271 11.079 13.958 9.964 14.064 9.94C14.139 9.923 14.243 9.901 14.313 9.964C14.383 10.026 14.376 10.144 14.369 10.176C14.323 10.369 12.529 12.038 11.599 12.902C11.309 13.171 11.104 13.362 11.062 13.406C10.968 13.503 10.872 13.596 10.78 13.685C10.21 14.233 9.784 14.645 10.804 15.317C11.294 15.64 11.686 15.907 12.077 16.173C12.504 16.464 12.93 16.754 13.482 17.116C13.622 17.208 13.756 17.303 13.887 17.396C14.384 17.751 14.831 18.069 15.383 18.019C15.703 17.989 16.035 17.688 16.203 16.789C16.6 14.663 17.382 10.059 17.563 8.161C17.574 8.00341 17.5673 7.84509 17.543 7.689C17.5284 7.56293 17.4671 7.44693 17.371 7.364C17.228 7.247 17.006 7.222 16.906 7.224C16.455 7.232 15.763 7.473 12.43 8.859Z"
                  fill="currentColor"
                />
              </svg>
              <p onClick={handleTelegramClick}>@iambogdan</p>
            </li>
            <li>
              <svg
                onClick={handleEmailClick}
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 0H0V19.2H24V0ZM21.6 4.8L12 10.8L2.4 4.8V2.4L12 8.4L21.6 2.4V4.8Z"
                  fill="currentColor"
                />
              </svg>

              <p onClick={handleEmailClick}>codify.software@gmail.com</p>
            </li>
          </ul>
        </div>

        <div>
          <Request />
        </div>
      </div>

      <footer>
        <ul>
          <li onClick={handlePhoneClick}>+7 (921) 588-62-02</li>
          <li onClick={handleTelegramClick}>@iambogdan</li>
          <li onClick={handleEmailClick}>codify.software@gmail.com</li>
        </ul>
      </footer>
    </div>
  );
}

export default About;
