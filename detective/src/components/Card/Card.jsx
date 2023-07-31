import style from "./card.module.scss";

export default function Card(props) {
  return (
    <a href="/" className={`${style.card}`} key={`${props.id}`}>
      <img src={process.env.PUBLIC_URL + props.icon} className={`${style.card_icon}`} alt="" />
      <p className={`${style.card_title}`}>{props.title}</p>
      <p className={`${style.card_text}`}>{props.text}</p>
      <div className={`${style.card_price_container}`}>
        <p className={`${style.card_price}`}>{props.price}</p>
        <div>
          <span>Подробнее</span>
          <img
            src={process.env.PUBLIC_URL + "/images/biege_arrow_right.svg"}
            alt="Нажмите, чтобы узнать подробнее"
          />
        </div>
      </div>
    </a>
  );
}
