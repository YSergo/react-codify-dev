import styles from "./Services.module.scss";
import Contacts from "../../components/Contacts/Contacts";
import Request from "../../components/Request/Request";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useState, useEffect } from "react";
import axios from "axios";

function Services({ setDrawerOpened }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://codify.software/api/get-services/"
        );
        setServices(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    }
    
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {services.map((item) => (
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
