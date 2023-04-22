import styles from "./Home.module.scss";
import { useEffect } from "react";

function Home({ setDrawerOpened }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className={styles.homePage}>
      <div className={styles.animateRequest }>
        <h1>Дизайн и разработка интерфейсов</h1>
        <button onClick={() => setDrawerOpened(true)}>Заказать проект</button>
      </div>
    </main>
  );
}

export default Home;
