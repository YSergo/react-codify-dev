import React from "react";
// import "./App.scss";
import RequestDrawer from "./components/RequestDrawer/RequestDrawer";
import Header from "./components/Header/Header"; // if u have index.js in it u can use just /Header

function App() {
  const [requestDrawerOpened, setRequestDrawerOpened] = React.useState(false);

  return (
    <div className="app">
      
      <RequestDrawer
        onClose={() => setRequestDrawerOpened(false)}
        isOpen={requestDrawerOpened}
      />

      <Header />

      <main className="homePage">
        <div>
          <h1>
            Дизайн и разработка
            {"\n"}
            интерфейсов
          </h1>
          <button onClick={() => setRequestDrawerOpened(true)}>
            Заказать проект
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
