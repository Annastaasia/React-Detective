import style from "./youtube.module.scss";
import icon from "../../assets/images/icon_youtube.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import preview1 from "../../assets/images/video_preview_1.png";
import preview2 from "../../assets/images/video_preview_2.png";
import preview3 from "../../assets/images/video_preview_3.png";
import play from "../../assets/images/play_button.svg";

export default function Youtube() {
  return (
    <div className={`${style.container}`}>
      <div className={`${style.youtube_header}`}>
        <h3 className={style.h3}>ПОЗНАКОМЬТЕСЬ С P&P НА YOUTUBE</h3>
        <a
          className={style.a}
          href="https://www.youtube.com/@pershin_detective"
          target="_blank"
          rel="noreferrer"
        >
          Наш блог на YouTube
          <img src={`${icon}`} alt="YouTube"></img>
        </a>
      </div>
      <Splide
        options={{
          perPage: 2,
          breakpoints: {
            1280: {
              perPage: 3,
            },
            744: {
              perPage: 2,
              arrows: false,
            },
            480: {
              perPage: 1,
              height: 475,
              gap: 16,
              arrows: false,
            },
          },
          perMove: 1,
          rewind: true,
          autoWidth: true,
          height: 487,
          pagination: false,
          arrows: true,
          type: "loop",
          gap: 10,
        }}
        className={`${style.custom_splide}`}
      >
        <SplideSlide>
          <a
            href="https://www.youtube.com/watch?v=Ipz85rqjzJU&amp;t=28s"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={`${style.video}`}
              src={`${preview1}`}
              alt="video"
            ></img>
            <img
              className={`${style.play}`}
              src={`${play}`}
              alt="play video"
            ></img>
          </a>
        </SplideSlide>
        <SplideSlide>
          <a
            href="https://www.youtube.com/watch?v=yAYJnED2nRc&amp;t=58s"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={`${style.video}`}
              src={`${preview2}`}
              alt="video"
            ></img>
            <img
              className={`${style.play}`}
              src={`${play}`}
              alt="play video"
            ></img>
          </a>
        </SplideSlide>
        <SplideSlide>
          <a
            href="https://www.youtube.com/watch?v=Ltecs0t_dJo&amp;t=6s"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={`${style.video}`}
              src={`${preview3}`}
              alt="video"
            ></img>
            <img
              className={`${style.play}`}
              src={`${play}`}
              alt="play video"
            ></img>
          </a>
        </SplideSlide>
      </Splide>
    </div>
  );
}
