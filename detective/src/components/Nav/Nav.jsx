import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Vectordown } from "../../assets/images/vectordown.svg";
import { ReactComponent as Vectordown2 } from "../../assets/images/bxs_chevron-down.svg";
import { ReactComponent as Vectorright } from "../../assets/images/bxs_chevron-right.svg";
import styled from "styled-components";
import style from "./nav.module.scss";
import ModalServices from "../../components/ModalServices/ModalServices";
import Phone from "../../assets/images/gg_phone.svg";
import Telegram from "../../assets/images/telegram.svg";
import WhatsApp from "../../assets/images/whatsapp.svg";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  column-gap: 1rem;

  a {
    text-decoration: none;
  }

  @media (max-width: 1230px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    z-index: 30;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 88px;
    left: 0;
    right: 0;
    padding: 24px 40px;
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 600px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    z-index: 30;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 88px;
    left: 0;
    right: 0;
    padding: 24px 16px;
    height: 812px;
    transition: transform 0.3s ease-in-out;
  }
`;

const Nav = ({ open }) => {
  const [showModal, setShowModal] = useState(false);
  const [isIconModalUp, setIsIconModalUp] = useState(false);

  const handleModalClick = () => {
    setShowModal(!showModal);
    setIsIconModalUp(!isIconModalUp);
  };

  return (
    <nav className={style.nav}>
      <div className={style.phon}>
        <Ul open={open}>
          <li className={style.liservices} onClick={handleModalClick}>
            Для частных лиц
            <div className={style.vector}>
              <Vectordown
                style={{
                  transform: isIconModalUp ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
          </li>
          {showModal && <ModalServices stateMenu={setShowModal} />}

          <Link to="/services_for_individuals">
            <li className={(style.li, style.limob)}>
              Для частных лиц{" "}
              <div className={style.right}>
                <Vectorright />
              </div>
            </li>
          </Link>

          <Link to="/">
            <li className={style.li}>
              Для бизнеса
              <div className={style.vector}>
                <Vectordown2 />
              </div>
              <div className={style.right}>
                <Vectorright />
              </div>
            </li>
          </Link>
          <Link to="/price">
            <li className={style.li}>
              Цены{" "}
              <div className={style.right}>
                <Vectorright />
              </div>
            </li>
          </Link>
          <Link to="/blog">
            <li className={style.li}>
              Блог{" "}
              <div className={style.right}>
                <Vectorright />
              </div>
            </li>
          </Link>
          <Link to="/reviews">
            <li className={style.li}>
              Отзывы{" "}
              <div className={style.right}>
                <Vectorright />
              </div>
            </li>
          </Link>
          <Link to="/contacts">
            <li className={style.li}>
              Контакты{" "}
              <div className={style.right}>
                <Vectorright />
              </div>
            </li>
          </Link>

          <div className={style.navcontainer}>
            <div className={style.container_medium}>
              <img src={Phone} alt="phone" className={style.phone} />
              <div className={style.container_small}>
                <p className={style.number}>+7 (925) 008-79-01</p>
                <p className={style.timevisit}>Ежедневно с 8:00 до 22:00</p>
              </div>
            </div>
            <a
              href="https://t.me/pershin_detective"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Telegram} alt="Telegram" className={style.telegram} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=79686868685&text=Доброго%20времени%20суток!"
              target="_blank"
              rel="noreferrer"
            >
              <img src={WhatsApp} alt="WhatsApp" className={style.whatsapp} />
            </a>
          </div>
        </Ul>
      </div>
    </nav>
  );
};

export default Nav;
