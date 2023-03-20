import styles from "./About.module.scss";
import bo from "./bo.jpg";
import Request from "../../components/Request/Request";

function About() {
  return (
    <div className={styles.wrapper}>
      <div className="description">
        <h2>Мы — команда разработчиков</h2>
        <h2>и дизайнеров</h2>
        <p>
          которая специализируется на веб-разработке и имеет большой опыт в
          создании высококачественных продуктов для наших клиентов.
        </p>
      </div>

      <div className="ourGoal">
        <h2>Мы считаем, что наша главная цель — </h2>
        <p>
          помочь вашему бизнесу развиваться, и поэтому мы всегда стремимся к
          креативным решениям, которые максимально эффективны и удовлетворяют
          ваши потребности.
        </p>
      </div>

      <div className="ourTeam">
        <h2>Наша команда</h2>
        <div>
          <div className="memberCard">
            <img src={bo} alt="person" />
            <p>Топоров Богдан Дмитриевич</p>
            <span>Co-founder Backend разработчик</span>
          </div>
          <p>Тот, кто отвечает за сервера и производительность вашего сайта</p>
          <button>Backend разработка</button>
          <button>Frontend разработка</button>
          <button>UX/UI дизайн</button>
        </div>
      </div>

      <div className="principles">
        <h2>Наши принципы</h2>
        <div>
          <span>01</span>
          <div>
            <h3>Бизнес-ориентированность</h3>
            <span>
              В первую очередь думаем о бизнесе. Помогаем решить проблемы и
              поднять показатели.{" "}
            </span>
          </div>
        </div>

        <div>
          <span>02</span>
          <div>
            <h3>Наблюдайте за прогрессом</h3>
            <p>Вы всегда будете отслеживать прогресс по вашему проекту. </p>
          </div>
        </div>

        <div>
          <svg alt="np" />
          <div>
            <span>03</span>
            <div>
              <h3>Вовлеченность</h3>
              <p>
                Нам важны вы, мы фокусируемся на вашем проекте, чтобы вывести
                его на новый уровень
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
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
          <h2>Заявка</h2>
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
