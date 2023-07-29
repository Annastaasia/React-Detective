import style from "./howtoreachus.module.scss"
import { ReactComponent as Telegram } from "../../assets/images/footer-telegram.svg";
import { ReactComponent as WhatsApp } from "../../assets/images/popup-whatsapp.svg";
import { ReactComponent as Phone } from "../../assets/images/popup-phone.svg";
import Form from "../Form/Form";

export default function HowToReachUs(props) {
  return (
    <div className={style.reach_us_wrapper}>

      <h4 className={style.reach_us_title}>
        Как с нами связаться?
      </h4>
      <section>
        <p>Анонимно в мессенджерах или по телефону с руководителем</p>
        <div className={style.reach_us_links}>
          <a
            className={style.reach_us_link}
            href="https://t.me/pershin_detective"
            target="_blank"
            rel="noreferrer"
          >
            <Telegram />
          </a>
          <a
            className={style.reach_us_link}
            href="https://api.whatsapp.com/send?phone=79686868685&text=Доброго%20времени%20суток!"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsApp />
          </a>
          <a
            className={style.reach_us_link}
            href="tel:+7(925)008-79-01"
          >
            <Phone />
            <p>+7 (925) 008-79-01</p>
          </a>
        </div>
      </section>
      <section>
        <p>Или оставить заявку. Мы перезвоним вам в ближайшее время</p>
        <Form isPopup={true} onButtonClick={props.onButtonClickShow} isOnMain={false} />
      </section>
    </div>
  )
}