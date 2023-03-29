import styles from "./Services.module.scss";
import Contacts from "../../components/Contacts/Contacts";
import Request from "../../components/Request/Request";

function Services({ setDrawerOpened }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div onClick={() => setDrawerOpened(true)} className={styles.card}>
          <div className={styles.info}>
            <h3>No-code</h3>
            <p>В 3 раза быстрее и дешевле без потери мощности.</p>
            <span>от 24 000₽</span>
          </div>
          <svg
            width="201"
            height="226"
            viewBox="-13 0 201 226"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.hoverfill}
              d="M50.5 0H201V226H3L135 72.32L50.5 0Z"
              fill="#D6E9FF"
            />
            <path
              d="M49 -1L135.5 72.5L1.5 227.5"
              stroke="#242424"
              stroke-width="3"
            />
          </svg>
        </div>

        <div onClick={() => setDrawerOpened(true)} className={styles.card}>
          <div className={styles.info}>
            <h3>Разработка</h3>
            <p>Напишем код для сайта или веб-приложений.</p>
            <span>от 60 000₽</span>
          </div>
          <svg
            width="201"
            height="226"
            viewBox="-13 0 201 226"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.hoverfill}
              d="M50.5 0H201V226H3L135 72.32L50.5 0Z"
              fill="#D6E9FF"
            />
            <path
              d="M49 -1L135.5 72.5L1.5 227.5"
              stroke="#242424"
              stroke-width="3"
            />
          </svg>
        </div>

        <div onClick={() => setDrawerOpened(true)} className={styles.card}>
          <div className={styles.info}>
            <h3>Хочу все</h3>
            <p>2 услуги в 1 - спроектируем продукт и реализуем его.</p>
            <span>от 120 000₽</span>
          </div>
          <svg
            width="201"
            height="226"
            viewBox="-13 0 201 226"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.hoverfill}
              d="M50.5 0H201V226H3L135 72.32L50.5 0Z"
              fill="#D6E9FF"
            />
            <path
              d="M49 -1L135.5 72.5L1.5 227.5"
              stroke="#242424"
              stroke-width="3"
            />
          </svg>
        </div>

        <div onClick={() => setDrawerOpened(true)} className={styles.card}>
          <div className={styles.info}>
            <h3>Поддержка</h3>
            <p>Поддерживаем работу сайта ежедневно.</p>
            <span>от 30 000₽</span>
          </div>
          <svg
            width="201"
            height="226"
            viewBox="-13 0 201 226"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.hoverfill}
              d="M50.5 0H201V226H3L135 72.32L50.5 0Z"
              fill="#D6E9FF"
            />
            <path
              d="M49 -1L135.5 72.5L1.5 227.5"
              stroke="#242424"
              stroke-width="3"
            />
          </svg>
        </div>

        <div onClick={() => setDrawerOpened(true)} className={styles.card}>
          <div className={styles.info}>
            <h3>UX/UI дизайн</h3>
            <p>Решим проблемы бизнеса с помощью UX/UI дизайна.</p>
            <span>от 50 000₽</span>
          </div>
          <svg
            width="201"
            height="226"
            viewBox="-13 0 201 226"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.hoverfill}
              d="M50.5 0H201V226H3L135 72.32L50.5 0Z"
              fill="#D6E9FF"
            />
            <path
              d="M49 -1L135.5 72.5L1.5 227.5"
              stroke="#242424"
              stroke-width="3"
            />
          </svg>
        </div>

        <div onClick={() => setDrawerOpened(true)} className={styles.card}>
          <div className={styles.info}>
            <h3>Доработка</h3>
            <p>Доработаем или обновим сайт.</p>
            <span>от 5 000₽</span>
          </div>
          <svg
            width="201"
            height="226"
            viewBox="-13 0 201 226"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.hoverfill}
              d="M50.5 0H201V226H3L135 72.32L50.5 0Z"
              fill="#D6E9FF"
            />
            <path
              d="M49 -1L135.5 72.5L1.5 227.5"
              stroke="#242424"
              stroke-width="3"
            />
          </svg>
        </div>
      </div>
      <div className={styles.contacts}>
        <Contacts />
        <Request />
      </div>
    </div>
  );
}

export default Services;
