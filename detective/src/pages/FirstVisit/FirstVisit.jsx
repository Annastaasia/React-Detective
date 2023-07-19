import style from "./firstvisit.module.scss";
import Chat from "../../assets/images/chat.svg";
import Car from "../../assets/images/car.svg";
import Users from "../../assets/images/users.svg";
import VideoChat from "../../assets/images/videochat.svg";

export default function FirstVisit() {
  return (
    <>
      <div className={style.container}>
        <h3 className={style.h3}>Первичное взаимодействие с нами</h3>

        <div className={style.right}>
          <div className={style.about}>
            <p className={style.p}>
              Мы понимаем опасение наших Заказчиков перед консультацией у
              частного детектива, связанное с обращением к незнакомому
              специалисту (третьему лицу) с целью поделиться проблемой и
              передать конфиденциальные сведения.
              <br /> <br />
              Опасения по поводу утечки информации более чем естественны в этой
              ситуации, поэтому специалистами нашей компании были подготовлены
              несколько видов консультаций, различных по уровню
              конфиденциальности.
            </p>
          </div>

          <div className={style.blok}>
            <img src={Chat} alt="chat" className={style.img} />
            <div className={style.blokinside}>
              <p className={style.title}>
                Личная консультация в офисе агентства
              </p>
              <ul className={style.ul}>
                <li>Нет необходимости в документах при посещении</li>
                <li>Возможность прийти в маске с целью скрыть лицо</li>
                <li>Никаких подписаний документов</li>
                <li>Отсутствие аудио-видео фиксации</li>
              </ul>
            </div>
          </div>

          <div className={style.blok}>
            <img src={Users} alt="users" className={style.img} />
            <div className={style.blokinside}>
              <p className={style.title}>Общение через посредника</p>
              <ul className={style.ul}>
                <li>Личное присутствие необязательно</li>
                <li>Вы можете прислать доверенное лицо для решения проблемы</li>
                <li>
                  Сохранение анонимности вашей проблемы путём рассказа от 3 лица
                </li>
              </ul>
            </div>
          </div>

          <div className={style.blok}>
            <img src={Car} alt="car" className={style.img} />
            <div className={style.blokinside}>
              <p className={style.title}>Выездная консультация</p>
              <ul className={style.ul}>
                <li>
                  Проведение консультации на территории вашей собственности
                </li>
                <li>Сохранение комфортных для Вас условий встречи</li>
                <li>Никаких подписаний документов</li>
                <li>Отсутствие аудио-видео фиксации</li>
              </ul>
            </div>
          </div>

          <div className={style.blok}>
            <img src={VideoChat} alt="videoChat" className={style.img} />
            <div className={style.blokinside}>
              <p className={style.title}>Онлайн-консультация</p>
              <ul className={style.ul}>
                <li>Любой удобный для Вас способ связи</li>
                <li>Вы можете не использовать веб камеру</li>
                <li>Вы можете использовать сторонние сервера и VPN</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
