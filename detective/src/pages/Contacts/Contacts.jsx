import style from "./contacts.module.scss";
import { ReactComponent as Phone } from "../../assets/images/footer-phone.svg";
import { ReactComponent as Location } from "../../assets/images/footer-location.svg";
import { ReactComponent as Telegram } from "../../assets/images/contact-telegram.svg";
import { ReactComponent as Whatsapp } from "../../assets/images/contact-whatsapp.svg";
import { ReactComponent as Signal } from "../../assets/images/contact-signal.svg";

export default function Contacts() {
  return (
    <>
      <main className={style.container}>
        <div className={style.blokmoscow}>
          <h3 className={style.h3}>Москва</h3>

          <div className={style.section}>
            <div className={style.smallsection}>
              <p className={style.title}>Телефон</p>
              <p className={style.p}>+7 (968) 686-86-85</p>
            </div>
            <Phone alt="Phone" className={style.icon} />
          </div>

          <div className={style.section}>
            <div className={style.smallsection2}>
              <p className={style.title}>Адрес</p>
              <p className={style.p}>Ул. Александра Солженицына 42</p>
            </div>
            <Location alt="Location" className={style.icon} />
          </div>
        </div>

        <div className={style.blokspb}>
          <h3 className={style.h3}>Санкт-Петербург</h3>

          <div className={style.section}>
            <div className={style.smallsection}>
              <p className={style.title}>Телефон</p>
              <p className={style.p}>+7 (968) 686-86-85</p>
            </div>
            <Phone alt="Phone" className={style.icon} />
          </div>

          <div className={style.section}>
            <div className={style.smallsection2}>
              <p className={style.title}>Адрес</p>
              <p className={style.p}>Ул. Александра Солженицына 42</p>
            </div>
            <Location alt="Location" className={style.icon} />
          </div>
        </div>

        <div className={style.bloksms}>
          <h1 className={style.h1}>Написать в мессенджер</h1>

          <a
            className={style.section2}
            href="https://t.me/pershin_detective"
            target="_blank"
            rel="noreferrer"
          >
            <div className={style.smallsection}>
              <p className={style.title}>Telegram</p>
              <p className={style.p}>@persin_detective</p>
            </div>
            <Telegram alt="Telegram" className={style.icon} />
          </a>
          <a
            className={style.section2}
            href="https://api.whatsapp.com/send?phone=79686868685&text=%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B3%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8%20%D1%81%D1%83%D1%82%D0%BE%D0%BA!"
            target="_blank"
            rel="noreferrer"
          >
            <div className={style.smallsection3}>
              <p className={style.title}>WhatsApp</p>
              <p className={style.p}>+79686868685</p>
            </div>
            <Whatsapp alt="Whatsapp" className={style.icon} />
          </a>

          <a
            className={style.section2}
            href="https://t.me/pershin_detective"
            target="_blank"
            rel="noreferrer"
          >
            <div className={style.smallsection2}>
              <p className={style.title}>Signal</p>
              <p className={style.p}>@detective</p>
            </div>
            <Signal alt="Signal" className={style.icon} />
          </a>
        </div>

        <div className={style.blokblogs}>
          <h2 className={style.h2}>Наши блоги</h2>

          <a
            className={style.section2}
            href="https://t.me/pershin_detective"
            target="_blank"
            rel="noreferrer"
          >
            <div className={style.smallsection}>
              <p className={style.title}>Telegram</p>
              <p className={style.p}>@persin_detective</p>
            </div>
            <Telegram alt="Telegram" className={style.icon} />
          </a>
          <a
            className={style.section2}
            href="https://api.whatsapp.com/send?phone=79686868685&text=%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B3%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8%20%D1%81%D1%83%D1%82%D0%BE%D0%BA!"
            target="_blank"
            rel="noreferrer"
          >
            <div className={style.smallsection3}>
              <p className={style.title}>WhatsApp</p>
              <p className={style.p}>+79686868685</p>
            </div>
            <Whatsapp alt="Whatsapp" className={style.icon} />
          </a>

          <a
            className={style.section2}
            href="https://t.me/pershin_detective"
            target="_blank"
            rel="noreferrer"
          >
            <div className={style.smallsection2}>
              <p className={style.title}>Signal</p>
              <p className={style.p}>@detective</p>
            </div>
            <Signal alt="Signal" className={style.icon} />
          </a>
        </div>
      </main>
    </>
  );
}
