import style from "./reviews.module.scss";
import reviews from "../../components/Review/review-array";
import Pagination from "../../components/Pagination/Pagination";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";

export default function Reviews(props) {
  return (
    <>
      <div className={style.page_container}>
        <div className={style.page_header}>
          <Breadcrumbs />
          <h3 className={style.page_title}>
            отзывы о компании pershin & partners
          </h3>
          <a
            href="https://yandex.ru/maps/org/pershin_partners/77630423623/reviews/?add-review=true"
            target="_blank"
            rel="noreferrer"
            className={style.page_link}
          >
            Оставить отзыв
            <img src="./images/biege_arrow_right.svg" alt="отзыв"></img>
          </a>
        </div>

        <Pagination array={reviews} wrapper={style.page_block} />
      </div>
    </>
  );
}
