import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import "./App.scss";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header"; // if u have index.js in it u can use just /Header
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  const [DrawerOpened, setDrawerOpened] = useState(false);

  return (
    <div className="app">
      <Drawer onClose={() => setDrawerOpened(false)} isOpen={DrawerOpened} />
      <Header />
      <Routes>
        <Route path="/" element={<Home setDrawerOpened={setDrawerOpened} />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
