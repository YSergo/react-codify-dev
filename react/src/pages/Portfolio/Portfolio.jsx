import Contacts from "../../components/Contacts/Contacts";
import Request from "../../components/Request/Request";
import styles from "./Portfolio.module.scss";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import { useState, useEffect } from "react";
import axios from "axios";

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://codify.software/api/get-projects"
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
        alert(':C');
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {projects.map((item) => (
          <PortfolioCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.link}
            url={item.url_to_project}
          />
        ))}
      </div>
      <div className={styles.contacts}>
        <Contacts />
        <Request />
      </div>
    </div>
  );
}

export default Portfolio;
