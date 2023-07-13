import { Link } from "react-router-dom";
import Burger from "../Nav/Burger.jsx";
import Logo from "../../assets/images/logo.svg";
import Phone from "../../assets/images/phone.svg";
import Telegram from "../../assets/images/telegram.svg";
import WhatsApp from "../../assets/images/whatsapp.svg";
import style from "./header.module.scss";

function Header() {
  return (
    <>
      <header>
        <div className={style.header}>
          <Link to="/">
            <img src={Logo} alt="logo" className={style.logo} />
          </Link>
          <Burger />
          <div className={style.container}>
            <div className={style.container_medium}>
              <img src={Phone} alt="phone" className={style.phone} />
              <div className={style.container_small}>
                <p className={style.number}>+7 (925) 008-79-01</p>
                <p className={style.timevisit}>Ежедневно с 8:00 до 22:00</p>
              </div>
            </div>
            <a href="https://www.kinoafisha.info/releases/archive/">
              <img src={Telegram} alt="Telegram" className={style.telegram} />
            </a>
            <a href="https://www.kinoafisha.info/releases/archive/">
              <img src={WhatsApp} alt="WhatsApp" className={style.whatsapp} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;