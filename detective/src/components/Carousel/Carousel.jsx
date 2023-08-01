import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import React from "react";
import style from "./carousel.module.scss";

export const Carousel = (props) => {
  const { children } = props;

  return (
    <Splide
      // onPaginationUpdated={(data, prev, curr) => {
      //   console.log(prev, curr, data);
      //   prev.items.forEach(el => el.button.classList.add(`${style.isNotActive}`));
      //   // curr.li.parentElement.children[(curr + 1)].lastChild.button.classList.replace(`${style.isNotActive}`, `${style.isActive}`);
      //   console.log(curr.li.parentNode)
      // }}
      options={{
        rewind: true,
        type: "loop",
        pagination: true,
        arrows: false,
        autoWidth: true,
        perPage: 1,
        gap: "15px",
        breakpoints: {
          1280: {
            perPage: 1,
          },
          640: {
            perPage: 1,
          },
          480: {
            perPage: 1,
          },
        },
        classes: {
          pagination: `${style.splide__pagination} ${style.mypagination}`,
          page: `${style.splide__pagination__page} ${style.mypage}`,
        }
      }}
      aria-label="React Splide"
      className={style.brzcarousel}
    >
      {React.Children.map(children, (item, index) => {
        return <SplideSlide key={index}>{item}</SplideSlide>;
      })}
    </Splide>
  );
};
