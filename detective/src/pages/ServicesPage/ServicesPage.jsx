import React, { useState } from "react";
import style from "./servicespage.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import { Link } from "react-router-dom";
import { ReactComponent as Person } from "../../assets/images/dashicons_businessman.svg";
import { ReactComponent as Business } from "../../assets/images/dashbusiness-center.svg";
import { ReactComponent as Info } from "../../assets/images/services-chat.svg";
import { ReactComponent as Family } from "../../assets/images/services-family.svg";
import { ReactComponent as Binoculars } from "../../assets/images/services-binoculars.svg";
import { ReactComponent as Search } from "../../assets/images/services-search.svg";
import { ReactComponent as Protect } from "../../assets/images/services-protect.svg";
import { ReactComponent as Journalism } from "../../assets/images/services-journalism.svg";

export default function ServicesPage() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const [showMore2, setShowMore2] = useState(false);

  const handleShowMore2 = () => {
    setShowMore2(!showMore2);
  };

  const [showItems, setShowItems] = useState(false);
  const [isIconUp, setIsIconUp] = useState(false);

  const handleItemClick = () => {
    setShowItems(!showItems);
    setIsIconUp(!isIconUp);
  };

  const [showItems2, setShowItems2] = useState(false);
  const [isIconUp2, setIsIconUp2] = useState(false);

  const handleItemClick2 = () => {
    setShowItems2(!showItems2);
    setIsIconUp2(!isIconUp2);
  };

  const [showItems3, setShowItems3] = useState(false);
  const [isIconUp3, setIsIconUp3] = useState(false);

  const handleItemClick3 = () => {
    setShowItems3(!showItems3);
    setIsIconUp3(!isIconUp3);
  };

  const [showItems4, setShowItems4] = useState(false);
  const [isIconUp4, setIsIconUp4] = useState(false);

  const handleItemClick4 = () => {
    setShowItems4(!showItems4);
    setIsIconUp4(!isIconUp4);
  };

  const [showItems5, setShowItems5] = useState(false);
  const [isIconUp5, setIsIconUp5] = useState(false);

  const handleItemClick5 = () => {
    setShowItems5(!showItems5);
    setIsIconUp5(!isIconUp5);
  };

  const [showItems6, setShowItems6] = useState(false);
  const [isIconUp6, setIsIconUp6] = useState(false);

  const handleItemClick6 = () => {
    setShowItems6(!showItems6);
    setIsIconUp6(!isIconUp6);
  };

  return (
    <>
      <main className={style.container}>
        <section className={style.section_header}>
          <Breadcrumbs />
          <h1 className={style.h1}>Услуги</h1>
          <div className={style.services__tabs}>
            <div className={style.tabs__person}>
              <Person alt="person" className={style.icon} />
              Для частных лиц
            </div>
            <Link to="/services_for_business">
              <div className={style.tabs__business}>
                <Business alt="small suitcase" className={style.icon} />
                Для бизнеса
              </div>
            </Link>
          </div>
        </section>
        <section className={style.catalog}>
          <section className={style.blokinfo}>
            <Info alt="Info" className={style.img} />
            <h2 className={style.h2}>Сбор информации</h2>
            <Link to="/">
              <p className={style.text}>Досье на человека</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Компромат на человека</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Организация слежки</p>
            </Link>
            <Link to="/services_for_individuals/geolocation">
              <p className={style.text}>
                Пробить геолокацию по номеру телефона
              </p>
            </Link>
            <Link to="/">
              <p className={style.text}>Проверка запрета на выезд</p>
            </Link>
            {showMore2 && (
              <div>
                <Link to="/">
                  <p className={style.text}>Проверка кредитной истории</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Проверка кредитной истории</p>
                </Link>
              </div>
            )}
            <button onClick={handleShowMore2} className={style.button}>
              {showMore2 ? "Скрыть" : "Ещё 2"}
            </button>
          </section>

          <section className={style.blokfamily}>
            <Family alt="Family" className={style.img} />
            <h2 className={style.h2}>Семейные вопросы</h2>
            <Link to="/">
              <p className={style.text}>Проверка образ жизни детей</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Проверить на верность</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Провокация измен</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Слежка за женой</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Слежка за мужем</p>
            </Link>
          </section>

          <section className={style.blokbinoculars}>
            <Binoculars alt="Binoculars" className={style.img} />
            <h2 className={style.h2}>Расследования</h2>
            <Link to="/">
              <p className={style.text}>Журналистское расследование</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Расследование убийств</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Расследование мошенничества</p>
            </Link>
          </section>

          <section className={style.bloksearch}>
            <Search alt="Search" className={style.img} />
            <h2 className={style.h2}>Розыск</h2>
            <Link to="/">
              <p className={style.text}>Поиск родственников</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Розыск имущества</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Поиск человека по адресу</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Розыск за границей</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Частный розыск</p>
            </Link>
            {showMore && (
              <div>
                <Link to="/">
                  <p className={style.text}>Поиск родственников ВОВ</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Розыск несовершеннолетних</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Розыск имущества наследователя</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск пропавших родственников</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>
                    Поиск людей по электронному адесу
                  </p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск родственников в Израиле</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Розыск людей по телефону</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск имущества в банкротстве</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск родственников по ДНК</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск человека по IP</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск биологических родителей</p>
                </Link>
              </div>
            )}
            <button onClick={handleShowMore} className={style.button}>
              {showMore ? "Скрыть" : "Ещё 11"}
            </button>
          </section>

          <section className={style.blokprotect}>
            <Protect alt="Protect" className={style.img} />
            <h2 className={style.h2}>Защита</h2>
            <Link to="/">
              <p className={style.text}>Поиск прослушки в квартире</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Обратиться в СМИ</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Выход из секты</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Помощь и защита при шантаже</p>
            </Link>
            <Link to="/">
              <p className={style.text}>Защита от буллинга</p>
            </Link>
          </section>

          <section className={style.blokjournalism}>
            <Journalism alt="Journalism" className={style.img} />
            <h2 className={style.h2}>Журналистика</h2>
            <Link to="/">
              <p className={style.text}>Заказать расследование</p>
            </Link>
          </section>
        </section>
        <section className={style.catalog_mobile}>
          <div className={style.blok}>
            <div className={style.row}>
              <div className={style.bloksmall}>
                <Info
                  alt="Info"
                  className={style.img}
                  style={{
                    filter: isIconUp ? "brightness(0%) saturate(100%)" : "none",
                  }}
                />
                <h2 className={style.h2}>Сбор информации</h2>
              </div>
              <svg
                className={style.large_icon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onClick={handleItemClick}
                style={{
                  transform: isIconUp ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <path fill="#E9C394" d="M7 10l5 5 5-5z " />
              </svg>
            </div>
            {showItems && (
              <div className={style.bloktext}>
                <Link to="/">
                  <p className={style.text}>Досье на человека</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Компромат на человека</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Организация слежки</p>
                </Link>
                <Link to="/services_for_individuals/geolocation">
                  <p className={style.text}>
                    Пробить геолокацию по номеру телефона
                  </p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Проверка запрета на выезд</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Проверка кредитной истории</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Проверка кредитной истории</p>
                </Link>
              </div>
            )}
          </div>

          <div className={style.blok}>
            <div className={style.row}>
              <div className={style.bloksmall}>
                <Search
                  alt="Search"
                  className={style.img}
                  style={{
                    filter: isIconUp2
                      ? "brightness(0%) saturate(100%)"
                      : "none",
                  }}
                />
                <h2 className={style.h2}>Розыск</h2>
              </div>
              <svg
                className={style.large_icon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onClick={handleItemClick2}
                style={{
                  transform: isIconUp2 ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <path fill="#E9C394" d="M7 10l5 5 5-5z " />
              </svg>
            </div>
            {showItems2 && (
              <div className={style.bloktext}>
                <Link to="/">
                  <p className={style.text}>Поиск родственников</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Розыск имущества</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск человека по адресу</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Розыск за границей</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Частный розыск</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск родственников ВОВ</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Розыск несовершеннолетних</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Розыск имущества наследователя</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск пропавших родственников</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>
                    Поиск людей по электронному адесу
                  </p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск родственников в Израиле</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Розыск людей по телефону</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск имущества в банкротстве</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск родственников по ДНК</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск человека по IP</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Поиск биологических родителей</p>
                </Link>
              </div>
            )}
          </div>

          <div className={style.blok}>
            <div className={style.row}>
              <div className={style.bloksmall}>
                <Family
                  alt="Family"
                  className={style.img}
                  style={{
                    filter: isIconUp3
                      ? "brightness(0%) saturate(100%)"
                      : "none",
                  }}
                />
                <h2 className={style.h2}>Семейные вопросы</h2>
              </div>
              <svg
                className={style.large_icon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onClick={handleItemClick3}
                style={{
                  transform: isIconUp3 ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <path fill="#E9C394" d="M7 10l5 5 5-5z " />
              </svg>
            </div>
            {showItems3 && (
              <div className={style.bloktext}>
                <Link to="/">
                  <p className={style.text}>Проверка образ жизни детей</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Проверить на верность</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Провокация измен</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Слежка за женой</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Слежка за мужем</p>
                </Link>
              </div>
            )}
          </div>

          <div className={style.blok}>
            <div className={style.row}>
              <div className={style.bloksmall}>
                <Protect
                  alt="Protect"
                  className={style.img}
                  style={{
                    filter: isIconUp4
                      ? "brightness(0%) saturate(100%)"
                      : "none",
                  }}
                />
                <h2 className={style.h2}>Защита</h2>
              </div>
              <svg
                className={style.large_icon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onClick={handleItemClick4}
                style={{
                  transform: isIconUp4 ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <path fill="#E9C394" d="M7 10l5 5 5-5z " />
              </svg>
            </div>
            {showItems4 && (
              <div className={style.bloktext}>
                <Link to="/">
                  <p className={style.text}>Поиск прослушки в квартире</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Обратиться в СМИ</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Выход из секты</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Помощь и защита при шантаже</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Защита от буллинга</p>
                </Link>
              </div>
            )}
          </div>

          <div className={style.blok}>
            <div className={style.row}>
              <div className={style.bloksmall}>
                <Binoculars
                  alt="Binoculars"
                  className={style.img}
                  style={{
                    filter: isIconUp5
                      ? "brightness(0%) saturate(100%)"
                      : "none",
                  }}
                />
                <h2 className={style.h2}>Расследования</h2>
              </div>
              <svg
                className={style.large_icon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onClick={handleItemClick5}
                style={{
                  transform: isIconUp5 ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <path fill="#E9C394" d="M7 10l5 5 5-5z " />
              </svg>
            </div>
            {showItems5 && (
              <div className={style.bloktext}>
                <Link to="/">
                  <p className={style.text}>Журналистское расследование</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Расследование убийств</p>
                </Link>
                <Link to="/">
                  <p className={style.text}>Расследование мошенничества</p>
                </Link>
              </div>
            )}
          </div>

          <div className={style.blok}>
            <div className={style.row}>
              <div className={style.bloksmall}>
                <Journalism
                  alt="Journalism"
                  className={style.img}
                  style={{
                    filter: isIconUp6
                      ? "brightness(0%) saturate(100%)"
                      : "none",
                  }}
                />
                <h2 className={style.h2}>Журналистика</h2>
              </div>
              <svg
                className={style.large_icon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onClick={handleItemClick6}
                style={{
                  transform: isIconUp6 ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <path fill="#E9C394" d="M7 10l5 5 5-5z " />
              </svg>
            </div>
            {showItems6 && (
              <div className={style.bloktext}>
                <Link to="/">
                  <p className={style.text}>Заказать расследование</p>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
