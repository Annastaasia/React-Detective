import style from "./post.module.scss";
import { Link } from "react-router-dom";

export default function Post(props) {
  return (
    <Link to={props.link} className={`${style.post}`}>
      <img src={process.env.PUBLIC_URL + props.image} alt="post"></img>
      <span>{props.tag}</span>
      <div className={`${style.post_content}`}>
        <p className={`${style.post_title}`}>{props.title}</p>
        <p className={`${style.post_text}`}>{props.text}</p>
        <div className={`${style.post_bottom}`}>
          <p className={`${style.post_button}`}>Читать</p>
          <p className={`${style.post_date}`}>{props.date}</p>
        </div>
      </div>
    </Link>
  );
}
