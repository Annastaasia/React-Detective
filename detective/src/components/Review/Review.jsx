import style from "./review.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Review from "../ReviewCard/ReviewCard";
import reviews from "./review-array";

export default function Reviews() {
  return (
    <>
      <section className={`${style.container}`}>
        <div className={style.blok}>
          <h3 className={style.h3}>Отзывы</h3>
          <div className={`${style.blok_buttons}`}>
            <a
              className={style.a}
              href="http://profi.ru/profile/PershinKO/?mobileApp=1"
              target="_blank"
              rel="noreferrer"
            >
              Отзывы на Профи.ру
              <img
                src={process.env.PUBLIC_URL + "/images/biege_arrow_right.svg"}
                alt="Нажмите, чтобы перейти и узать подробнее"
              />
            </a>
            <a
              className={style.a}
              href="http://profi.ru/profile/PershinKO/?mobileApp=1"
              target="_blank"
              rel="noreferrer"
            >
              Отзывы на Яндекс.Карты
              <img
                src={process.env.PUBLIC_URL + "/images/biege_arrow_right.svg"}
                alt="Нажмите, чтобы перейти и узать подробнее"
              />
            </a>
          </div>
        </div>
        <Splide
          options={{
            perPage: 4,
            perMove: 1,
            breakpoints: {
              1280: {
                perPage: 3,
              },
              920: {
                perPage: 2,
                arrows: false,
              },
              480: {
                perPage: 1,
                height: 400,
                gap: 16,
                arrows: false,
              },
            },
            rewind: false,
            autoWidth: true,
            height: 445,
            pagination: false,
            arrows: true,
            type: "loop",
            gap: 24,
          }}
          className={style.custom_splide}
          aria-label="Rates"
        >
          {reviews.map((review, index) => (
            <SplideSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                columnGap: 20,
                alignItems: "center",
              }}
            >
              <Review
                isLink={true}
                review={review.review}
                name={review.name}
                stars={review.stars}
                date={review.date}
                text={review.text}
              ></Review>
            </SplideSlide>
          ))}
        </Splide>
      </section>
    </>
  );
}
