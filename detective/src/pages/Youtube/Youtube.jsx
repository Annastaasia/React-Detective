import styles from "./youtube.module.scss";
import icon from "../../assets/images/icon_youtube.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import preview1 from "../../assets/images/video_preview_1.png";
import preview2 from "../../assets/images/video_preview_2.png";
import preview3 from "../../assets/images/video_preview_3.png";

export default function Youtube() {
  return (
    <div className={`${styles.container}`}>
      <header className={`${styles.youtube_header}`}>
        <h3>ПОЗНАКОМЬТЕСЬ С P&P НА YOUTUBE</h3>
        <a
          href="https://www.youtube.com/@pershin_detective"
          target="_blank"
          rel="noreferrer"
        >
          Наш блог на YouTube
          <img src={`${icon}`} alt="YouTube"></img>
        </a>
      </header>
      <Splide
        options={{
          perPage: 2,
          perMove: 1,
          rewind: true,
          autoWidth: true,
          height: 560,
          pagination: false,
          arrows: true,
          type: "loop",
          gap: 20,
        }}
      >
        <SplideSlide>
          <a
            href="https://www.youtube.com/watch?v=Ipz85rqjzJU&amp;t=28s"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={`${styles.video}`}
              src={`${preview1}`}
              alt="video"
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
              className={`${styles.video}`}
              src={`${preview2}`}
              alt="video"
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
              className={`${styles.video}`}
              src={`${preview3}`}
              alt="video"
            ></img>
          </a>
        </SplideSlide>
      </Splide>
    </div>
  );
}
