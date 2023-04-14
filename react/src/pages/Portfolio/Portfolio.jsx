import Contacts from "../../components/Contacts/Contacts";
import Request from "../../components/Request/Request";
import styles from "./Portfolio.module.scss";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import { useState, useEffect } from "react";
import axios from "axios";
import ContentLoader from "react-content-loader";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://codify.software/api/get-projects"
        );
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
        alert(":C");
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const renderSkeletons = () => {
    const skeletons = [];
    for (let i = 0; i < 4; i++) {
      skeletons.push(
        <ContentLoader
          key={i}
          speed={2}
          width={443}
          height={554}
          viewBox="0 0 443 554"
          backgroundColor="#f3f3f3"
          foregroundColor="white"
        >
          <rect x="0" y="0" rx="0" ry="0" width="443" height="554" />
        </ContentLoader>
      );
    }
    return skeletons;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {loading
          ? renderSkeletons()
          : projects.map((item) => (
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
