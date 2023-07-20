import style from "./director.module.scss";
import { Link } from "react-router-dom";
import WorkHistory from "../../assets/images/work-history.svg";
import Vectorright from "../../assets/svg/Vectorright.jsx";

export default function Director() {
  return (
    <>
      <div className={style.container}>
        <div className={style.backgroundsmall}></div>
        <div className={style.blok}>
          <div className={style.about}>
            <p className={style.title}>Руководитель детективного агентства</p>
            <h3 className={style.h3}>Першин Кирилл Олегович</h3>
          </div>
          <p className={style.text}>
            Руководитель и лицо компании - Першин Кирилл Олегович – имеет
            большой эмпирический опыт в оказании детективных услуг, состоит в
            партнерских отношениях с ведущим медийным детективным агентством
            "Legion", является участником международных ассоциации детективов,
            ведет открытую и прозрачную политику работы, призывает не верить на
            слово своих заказчиков, а опираться только на подробные отчёты и
            факты.
            <br /> <br />
            Кирилл Олегович активно ведёт свой YouTube блог и социальные сети,
            где как специалист по безопасности даёт необходимые рекомендации,
            полезный материал и рассказывает о своих услугах и принципах их
            оказания.
          </p>

          <div className={style.containerwork}>
            <img src={WorkHistory} alt="work-history" className={style.img} />
            <p className={style.p}>Стаж в частной практике более 15 лет</p>
          </div>
          <Link to="/form">
            <button type="submit" className={style.button}>
              Записаться на консультацию
              <div className={style.vector}>
                <Vectorright />
              </div>
            </button>
          </Link>
        </div>

        <div className={style.background}></div>
      </div>
    </>
  );
}
