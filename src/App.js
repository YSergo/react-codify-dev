import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header"; // if u have index.js in it u can use just /Header
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  const [DrawerOpened, setDrawerOpened] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handlePhoneClick = () => {
    window.open("tel:+79215886202", "_blank");
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/iambogdan", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:codify.software@gmail.com";
  };

  return (
    <div className="app">
      <Drawer onClose={() => setDrawerOpened(false)} isOpen={DrawerOpened} />
      <Header />
      <Routes>
        <Route path="/" element={<Home setDrawerOpened={setDrawerOpened} />} />
        <Route
          path="/About"
          element={
            <About
              handlePhoneClick={handlePhoneClick}
              handleTelegramClick={handleTelegramClick}
              handleEmailClick={handleEmailClick}
            />
          }
        />
      </Routes>
      {!isHomePage && (
        <Footer
          handlePhoneClick={handlePhoneClick}
          handleTelegramClick={handleTelegramClick}
          handleEmailClick={handleEmailClick}
        />
      )}
    </div>
  );
}

export default App;
