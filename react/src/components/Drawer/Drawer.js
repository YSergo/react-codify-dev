import { useEffect } from "react";
import styles from "./Drawer.module.scss";
import Request from "../Request/Request";

function Drawer({ onClose, drawerOpened }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (drawerOpened) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [drawerOpened, onClose]);

  return (
    <div
      onClick={onClose}
      className={`${styles.overlay} ${drawerOpened ? styles.visible : ""}`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`${styles.drawer} ${drawerOpened ? styles.opened : ""}`}
      >
        <Request onClose={onClose} showCloseButton={true} />
      </div>
    </div>
  );
}

export default Drawer;
