import styles from "./Services.module.scss";
import Contacts from "../../components/Contacts/Contacts";
import Request from "../../components/Request/Request";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useState, useEffect } from "react";
import axios from "axios";
import ContentLoader from "react-content-loader";

function Services({ setDrawerOpened }) {
  const [favors, setFavors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://codify.software/api/get-services"
        );
        setFavors(response.data);
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
    for (let i = 0; i < 8; i++) {
      skeletons.push(
        <ContentLoader
          key={i}
          speed={2}
          width={446}
          height={226}
          viewBox="0 0 446 226"
          backgroundColor="#f3f3f3"
          foregroundColor="white"
        >
          <rect x="0" y="0" rx="0" ry="0" width="446" height="226" />
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
          : favors.map((item) => (
              <ServiceCard
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                setDrawerOpened={setDrawerOpened}
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

export default Services;
