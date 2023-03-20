import styles from "./Home.module.scss";

function Home({setRequestDrawerOpened}) {
  return (
    <main className={styles.homePage}>
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
  );
}

export default Home;
