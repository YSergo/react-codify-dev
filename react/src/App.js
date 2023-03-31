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
  const [drawerOpened, setDrawerOpened] = useState(false);

  const setDrawerState = (state) => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "overlay";
    }
    setDrawerOpened(state);
  };

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="app">
      <Drawer
        onClose={() => setDrawerState(false)}
        drawerOpened={drawerOpened}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home setDrawerOpened={setDrawerState} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/services"
          element={<Services setDrawerOpened={setDrawerState} />}
        ></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
      {!isHomePage && <Footer />}
    </div>
  );
}

export default App;
