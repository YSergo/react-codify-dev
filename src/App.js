// import logo from './logo.svg';
import "./App.scss";

function App() {
  return (
    <div className="app">
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
          <div>
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
        </div>
      </header>
    </div>
    // {/* <header className="App-header">
    //   <img width={60} height={60} src={logo} className="App-logo" alt="logo" />
    // </header> */}
  );
}

export default App;
