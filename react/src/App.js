import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header"; // if u have index.js in it u can use just /Header
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import HeaderMobile from "./components/Header/HeaderMobile";
import axios from "axios";

function App() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [origin, setOrigin] = useState(null);

  const [openedFromMenu, setOpenedFromMenu] = useState(false);

  const setDrawerState = (state) => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "overlay";
      setTimeout(() => {
        setOrigin(null);
      }, 300); // Время анимации Drawer в миллисекундах (0.3s)
    }
    setDrawerOpened(state);
  };

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  //mob
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 767;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //

  const [favors, setFavors] = useState([]);
  const [favorsLoading, setFavorsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setFavorsLoading(true);
        const response = await axios.get(
          "https://codify.software/api/get-services"
        );
        setFavors(response.data);
        setFavorsLoading(false);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
        alert(":C");
        setFavorsLoading(false);
      }
    }

    fetchData();
  }, []);

  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setProjectsLoading(true);
        const response = await axios.get(
          "https://codify.software/api/get-projects"
        );
        setProjects(response.data);
        setProjectsLoading(false);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
        alert(":C");
        setProjectsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="app">
      <Drawer
        onClose={() => setDrawerState(false)}
        drawerOpened={drawerOpened}
        origin={origin}
        setOrigin={setOrigin}
        setDrawerOpened={setDrawerState}
        openedFromMenu={openedFromMenu}
        setOpenedFromMenu={setOpenedFromMenu}
      />
      {isMobile ? (
        <HeaderMobile setDrawerOpened={setDrawerState} setOrigin={setOrigin} />
      ) : (
        <Header />
      )}
      <Routes>
        <Route path="/" element={<Home setDrawerOpened={setDrawerState} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/services"
          element={
            <Services
              setDrawerOpened={setDrawerState}
              favors={favors}
              favorsLoading={favorsLoading}
              isMobile={isMobile}
            />
          }
        ></Route>
        <Route
          path="/portfolio"
          element={
            <Portfolio projects={projects} projectsLoading={projectsLoading} isMobile={isMobile} />
          }
        ></Route>
      </Routes>
      {!isMobile && !isHomePage && <Footer />}
    </div>
  );
}

export default App;
