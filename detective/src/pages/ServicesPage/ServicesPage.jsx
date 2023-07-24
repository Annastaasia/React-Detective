import React, { useState } from "react";
import style from "./servicespage.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import { Link } from "react-router-dom";
import { ReactComponent as Person } from "../../assets/images/icon_person.svg";
import { ReactComponent as Business } from "../../assets/images/icon_business.svg";
import Info from "../../assets/images/services-chat.svg";
import Family from "../../assets/images/services-family.svg";
import Binoculars from "../../assets/images/services-binoculars.svg";
import Search from "../../assets/images/services-search.svg";
import Protect from "../../assets/images/services-protect.svg";
import Journalism from "../../assets/images/services-journalism.svg";

export default function ServicesPage() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.section_header}>
          <Breadcrumbs />
          <h1 className={style.h1}>Услуги</h1>
          <div className={style.services__tabs}>
            <div className={style.tabs__person}>
              <Person alt="person" className={style.icon} />
              Для частных лиц
            </div>
            <Link to="/business">
              <div className={style.tabs__bisness}>
                <Business alt="small suitcase" className={style.icon} />
                Для бизнеса
              </div>
            </Link>
          </div>
        </div>

        <div className={style.catalog}>
          <div className={style.blokinfo}>
            <img src={Info} alt="Info" className={style.img} />
            <h2 className={style.h2}>Сбор информации</h2>
            <p className={style.text}>Досье на человека</p>
            <p className={style.text}>Компромат на человека</p>
            <p className={style.text}>Организация слежки</p>
            <p className={style.text}>Пробить геолокацию по номеру телефона</p>
            <p className={style.text}>Проверка запрета на выезд</p>
            {showMore && (
              <div>
                <p className={style.text}>Проверка кредитной истории</p>
                <p className={style.text}>Проверка кредитной истории</p>
              </div>
            )}
            <button onClick={handleShowMore}>
              {showMore ? "Скрыть" : "Ещё 2"}
            </button>
          </div>

          <div className={style.blokfamily}>
            <img src={Family} alt="Family" className={style.img} />
            <h2 className={style.h2}>Семейные вопросы</h2>
            <p className={style.text}>Проверка образ жизни детей</p>
            <p className={style.text}>Проверить на верность</p>
            <p className={style.text}>Провокация измен</p>
            <p className={style.text}>Слежка за женой</p>
            <p className={style.text}>Слежка за мужем</p>
          </div>

          <div className={style.blokbinoculars}>
            <img src={Binoculars} alt="Binoculars" className={style.img} />
            <h2 className={style.h2}>Расследования</h2>
            <p className={style.text}>Журналистское расследование</p>
            <p className={style.text}>Расследование убийств</p>
            <p className={style.text}>Расследование мошенничества</p>
          </div>

          <div className={style.bloksearch}>
            <img src={Search} alt="Search" className={style.img} />
            <h2 className={style.h2}>Розыск</h2>
            <p className={style.text}>Поиск родственников</p>
            <p className={style.text}>Розыск имущества</p>
            <p className={style.text}>Поиск человека по адресу</p>
            <p className={style.text}>Розыск за границей</p>
            <p className={style.text}>Частный розыск</p>
            {showMore && (
              <div>
                <p className={style.text}>Поиск родственников ВОВ</p>
                <p className={style.text}>Розыск несовершеннолетних</p>
                <p className={style.text}>Розыск имущества наследователя</p>
                <p className={style.text}>Поиск пропавших родственников</p>
                <p className={style.text}>Поиск людей по электронному адесу</p>
                <p className={style.text}>Поиск родственников в Израиле</p>
                <p className={style.text}>Розыск людей по телефону</p>
                <p className={style.text}>Поиск имущества в банкротстве</p>
                <p className={style.text}>Поиск родственников по ДНК</p>
                <p className={style.text}>Поиск человека по IP</p>
                <p className={style.text}>Поиск биологических родителей</p>
              </div>
            )}
            <button onClick={handleShowMore}>
              {showMore ? "Скрыть" : "Ещё 11"}
            </button>
          </div>

          <div className={style.blokprotect}>
            <img src={Protect} alt="Protect" className={style.img} />
            <h2 className={style.h2}>Защита</h2>
            <p className={style.text}>Поиск прослушки в квартире</p>
            <p className={style.text}>Обратиться в СМИ</p>
            <p className={style.text}>Выход из секты</p>
            <p className={style.text}>Помощь и защита при шантаже</p>
            <p className={style.text}>Защита от буллинга</p>
          </div>

          <div className={style.blokjournalism}>
            <img src={Journalism} alt="Journalism" className={style.img} />
            <h2 className={style.h2}>Журналистика</h2>
            <p className={style.text}>Заказать расследование</p>
          </div>
        </div>
      </div>
    </>
  );
}
