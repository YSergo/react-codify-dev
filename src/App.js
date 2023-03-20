import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import "./App.scss";
import RequestDrawer from "./components/RequestDrawer/RequestDrawer";
import Header from "./components/Header/Header"; // if u have index.js in it u can use just /Header
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  const [requestDrawerOpened, setRequestDrawerOpened] = useState(false);

  return (
    <div className="app">
      <RequestDrawer
        onClose={() => setRequestDrawerOpened(false)}
        isOpen={requestDrawerOpened}
      />

      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home setRequestDrawerOpened={setRequestDrawerOpened} />}
        />

        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
