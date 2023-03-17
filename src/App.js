import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="overlay">
        {/* <div style={{ display: "none" }} className="overlay"> */}
        <div className="request-drawer">
          <div className="request-drawer__top">
            <h2>Заявка</h2>
            <svg
              width="24"
              height="24"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M26 2L2 26" stroke="black" stroke-width="3" />
              <path d="M2 2L26 26" stroke="black" stroke-width="3" />
            </svg>
          </div>

          <div className="contact-form">
            <p className="first-p">
              Оставьте свои
              <br />
              контактные данные
            </p>
            <input placeholder="Имя" />
            <input placeholder="Телефон" />
            <input placeholder="Эл. почта" />
            <p className="second-p">Какую задачу нужно решить?</p>
            <textarea
              className="request-input"
              placeholder="Опишите задачу"
            ></textarea>{" "}
            <button>Отправить</button>
          </div>
        </div>
      </div>

      <header className="header">
        <nav className="header__left">
          <button>Codify.Software</button>
        </nav>

        <nav className="header__center">
          <button>О нас</button>
          <button>Услуги</button>
          <button>Портфолио</button>
        </nav>

        <nav className="header__right">
          <button>
            <p>RU</p>
            <svg
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1L7.5 7L1 1"
                stroke="black"
                stroke-linecap="square"
              />
            </svg>
          </button>
        </nav>
      </header>

      <main className="main">
        <section className="main__wrapper">
          <div className="main__content">
            <h1>
              Дизайн и разработка
              {"\n"}
              интерфейсов
            </h1>
            <button>Заказать проект</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
