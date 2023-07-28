import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Vectordown } from "../../assets/images/vectordown.svg";
import { ReactComponent as Vectordown2 } from "../../assets/images/bxs_chevron-down.svg";
import styled from "styled-components";
import style from "./nav.module.scss";
import ModalServices from "../../components/ModalServices/ModalServices";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  column-gap: 1rem;

  a {
    text-decoration: none;
  }

  li {
    display: flex;
    flex-flow: row nowrap;
    column-gap: 0.5rem;
    padding: 18px 10px;
    color: #fff;
    font-family: "Geologica";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    cursor: pointer;
  }

  li:hover {
    color: #fff2d8;
  }

  @media (max-width: 1230px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
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
      <Ul open={open}>
        <li className={style.li} onClick={handleModalClick}>
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

        <li className={style.li}>
          Для бизнеса
          <div className={style.vector}>
            <Vectordown2 />
          </div>
        </li>

        <Link to="/price">
          <li>Цены</li>
        </Link>
        <Link to="/blog">
          <li>Блог</li>
        </Link>
        <Link to="/reviews">
          <li>Отзывы</li>
        </Link>
        <Link to="/contacts">
          <li>Контакты</li>
        </Link>
      </Ul>
    </nav>
  );
};

export default Nav;
