import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header"; // if u have index.js in it u can use just /Header
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  const [DrawerOpened, setDrawerOpened] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="app">
      <Drawer onClose={() => setDrawerOpened(false)} isOpen={DrawerOpened} />
      <Header />
      <Routes>
        <Route path="/" element={<Home setDrawerOpened={setDrawerOpened} />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/Services"
          element={<Services setDrawerOpened={setDrawerOpened} />}
        ></Route>
        <Route path="/Portfolio" element={<Portfolio />}></Route>
      </Routes>
      {!isHomePage && <Footer />}
    </div>
  );
}

export default App;
