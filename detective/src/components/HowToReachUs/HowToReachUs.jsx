import style from "./howtoreachus.module.scss"
import { ReactComponent as Telegram } from "../../assets/images/footer-telegram.svg";
// import { ReactComponent as WhatsApp } from "../../assets/images/footer-whatsapp.svg";

export default function HowToReachUs() {
  return (
    <div className={style.reach_us_wrapper}>
      <h4 className={style.reach_us_title}>
        Как с нами связаться?
      </h4>
      <p>Анонимно в мессенджерах или по телефону с руководителем</p>
      <div className={style.reach_us_links}>
        <Telegram />
        {/* <WhatsApp /> */}
      </div>
    </div>
  )
}