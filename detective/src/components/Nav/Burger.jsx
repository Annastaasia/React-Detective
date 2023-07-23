import React, { useState } from "react";
import styled from "styled-components";
import style from "./nav.module.scss";
import Nav from "./Nav";

const StyledBurger = styled.div`
  height: 48px;
  padding: 4px 20px;
  align-items: center;
  gap: 8px;
  position: fixed;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  border-radius: 48px;
  color: #fff;
  background-color: #110f0f;
  border: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 20;
  display: none;

  @media screen and (max-width: 1230px) and (min-width: 675px) {
    display: flex;
    justify-content: space-around;
    flex-flow: row nowrap;
    left: 15%;
  }

  @media screen and (max-width: 674px) {
    display: flex;
    justify-content: space-around;
    flex-flow: row nowrap;
    right: 10%;
  }

  div {
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(38deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(-38deg) scaleX(2)" : "rotate(0) scaleX(1)"};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <section className={style.menu}>
          <div className={style.div1} />
          <div className={style.div2} />
          <div className={style.div3} />
        </section>
        Меню
      </StyledBurger>
      <Nav open={open} />
    </>
  );
};

export default Burger;
