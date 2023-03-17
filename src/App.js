import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="overlay">
        {/* <div style={{ display: "none" }} className="overlay"> */}
        <div className="drawer">
          <div className="drawerTop">
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

          <div className="submitForm">
            <p>
              Оставьте свои
              <br />
              контактные данные
            </p>
            <input placeholder="Имя" />
            <input placeholder="Телефон" />
            <input placeholder="Эл. почта" />
            <p>Какую задачу нужно решить?</p>
            <input className="task-form" />
            <button>Отправить</button>
          </div>
        </div>
      </div>

      <header>
        <div className="headerLeft">
          <button>Codify.Software</button>
        </div>

        <div className="headerCenter">
          <button>О нас</button>
          <button>Услуги</button>
          <button>Портфолио</button>
        </div>

        <div className="headerRight">
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
        </div>
      </header>

      <div className="content">
        <div className="mainPageWrapper">
          <div className="mainPage">
            <h1>
              Дизайн и разработка
              {"\n"}
              интерфейсов
            </h1>
            <button>Заказать проект</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
