import React from "react";
import { Link } from "react-router-dom";
import Vectordown from "../../assets/svg/Vectordown.jsx";
import styled from "styled-components";
import style from "./nav.module.scss";

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
  return (
    <nav className={style.nav}>
      <Ul open={open}>
        <Link to="/">
          <li className={style.li}>
            Для частных лиц
            <div className={style.vector}>
              <Vectordown />
            </div>
          </li>
        </Link>
        <Link to="/">
          <li className={style.li}>
            Для бизнеса
            <div className={style.vector}>
              <Vectordown />
            </div>
          </li>
        </Link>
        <Link to="/price">
          <li>Цены</li>
        </Link>
        <Link to="/blog">
          <li>Блог</li>
        </Link>
        <Link to="/review">
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
