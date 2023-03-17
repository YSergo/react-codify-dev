import React from "react";
import "./App.scss";
import RequestDrawer from "./components/RequestDrawer/RequestDrawer";
import Header from "./components/Header/Header"; // if u have index.js in it u can use just /Header

function App() {

  return (
    <div className="app">

      <RequestDrawer/>

      <Header />

      <main className="homePage">
        <div>
          <h1>
            Дизайн и разработка
            {"\n"}
            интерфейсов
          </h1>
          <button>Заказать проект</button>
        </div>
      </main>

    </div>
  );
}

export default App;
