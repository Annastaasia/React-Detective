import styles from "./card.module.scss";

export default function Card(props) {
  return (
    <a href="/" className={`${styles.card}`} key={`${props.id}`}>
      <img src={props.icon} className={`${styles.card_icon}`} alt="" />
      <p className={`${styles.card_title}`}>{props.title}</p>
      <p className={`${styles.card_text}`}>{props.text}</p>
      <div className={`${styles.card_price_container}`}>
        <p className={`${styles.card_price}`}>{props.price}</p>
        <div>
          <span>Подробнее</span>
          <img
            src="images/biege_arrow_right.svg"
            alt="Нажмите, чтобы узнать подробнее"
          />
        </div>
      </div>
    </a>
  );
}
