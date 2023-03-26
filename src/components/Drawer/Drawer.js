import { useEffect } from "react";
import styles from "./Drawer.module.scss";
import Request from "../Request/Request";

function Drawer({ onClose, isOpen }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      onClick={onClose}
      className={`${styles.overlay} ${isOpen ? styles.visible : ""}`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`${styles.drawer} ${isOpen ? styles.opened : ""}`}
      >
        <Request onClose={onClose} showCloseButton={true} />
      </div>
    </div>
  );
}

export default Drawer;
