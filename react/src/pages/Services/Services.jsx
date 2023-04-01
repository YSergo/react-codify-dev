import styles from "./Services.module.scss";
import Contacts from "../../components/Contacts/Contacts";
import Request from "../../components/Request/Request";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useState, useEffect } from "react";
import axios from "axios";

function Services({ setDrawerOpened }) {
  const [favors, setFavors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://codify.software/api/get-services/"
        );
        setFavors(response.data);
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
        {favors.map((item) => (
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
