import style from "./nomatch.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as VectorRight } from "../../assets/images/vectorright.svg";
import NoMatch from "../../assets/images/nomatch-404.png";

export default function NoModule() {
  return (
    <>
      <main className={style.container}>
        <div className={style.blok_nomatch}>
          <h1 className={style.h1}>404. Страница не найдена</h1>
          <p className={style.p}>
            Возможно, она была перемещена, или вы просто
            <br /> неверно указали адрес страницы.
          </p>
          <Link to="/">
            <button className={style.button_nomatch} type="button">
              Перейти на главную
              <VectorRight alt="vector" className={style.icon_nomatch} />
            </button>
          </Link>
        </div>
        <img src={NoMatch} alt="404_page" className={style.img_nomatch} />
      </main>
    </>
  );
}
