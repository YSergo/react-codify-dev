import styles from "./Footer.module.scss";
import {
  handlePhoneClick,
  handleTelegramClick,
  handleEmailClick,
} from "../../utils/contactHelpers";

function Footer() {
  return (
    <footer style={styles.footer}>
      <ul>
        <li onClick={handlePhoneClick}>+7 (921) 588-62-02</li>
        <li onClick={handleTelegramClick}>@iambogdan</li>
        <li onClick={handleEmailClick}>codify.software@gmail.com</li>
      </ul>
    </footer>
  );
}

export default Footer;
