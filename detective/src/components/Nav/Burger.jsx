import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";

const StyledBurger = styled.button`
  height: 48px;
  padding: 16px;
  align-items: center;
  gap: 8px;
  position: fixed;
  left: 20%;
  border-radius: 48px;
  color: #fff2d8;
  background-color: #110f0f;
  border: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 20;
  display: none;

  @media (max-width: 1230px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        Меню
      </StyledBurger>
      <Nav open={open} />
    </>
  );
};

export default Burger;
