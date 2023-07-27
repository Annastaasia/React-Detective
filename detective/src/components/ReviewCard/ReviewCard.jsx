import style from "./reviewcard.module.scss";
import { Link } from "react-router-dom";
import star from "../../assets/images/icon_star.svg";
import emptyStar from "../../assets/images/icon_empty_star.svg";

export default function Review(props) {
  const stars = [];

  const rand = function () {
    return Math.random();
  };

  for (let i = 0; i < props.stars; i++) {
    stars.push(<img src={star} alt="" key={rand()}></img>);
  }

  if (stars.length < 5) {
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<img src={emptyStar} alt="" key={rand()}></img>);
    }
  }

  if (props.isLink === true) {
    return (
      <>
        <Link to="/reviews">
          <div className={`${style.review}`}>
            <div className={`${style.review_stars}`}>
              <span>{props.review}</span>
              {stars}
            </div>
            <p className={`${style.review_name}`}>{props.name}</p>
            <p className={`${style.review_date}`}>{props.date}</p>
            <p className={`${style.review_text}`}>{props.text}</p>
          </div>
        </Link>
      </>
    );
  } else {
    return (
      <a
        target="_blank"
        href="https://yandex.ru/web-maps/org/77630423623/reviews?reviews[publicId]=fnuuk197am45jz6ep2m0bg0jur&utm_source=review"
        rel="noreferrer"
      >
        <div className={`${style.review}`}>
          <div className={`${style.review_stars}`}>
            <span>{props.review}</span>
            {stars}
          </div>
          <p className={`${style.review_name}`}>{props.name}</p>
          <p className={`${style.review_date}`}>{props.date}</p>
          <p className={`${style.review_text}`}>{props.text}</p>
        </div>
      </a>
    );
  }
}
