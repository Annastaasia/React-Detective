import style from "./services.module.scss";
import { Link } from "react-router-dom";
import cards from "../../components/Card/cards";
import Card from "../../components/Card/Card.jsx";
import Person from "../../assets/images/icon_person.svg";
import Business from "../../assets/images/icon_business.svg";
import Vectorright from "../../assets/svg/Vectorright.jsx";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Services() {
  return (
    <>
      <div className={style.container}>
        <div className={style.services__header}>
          <h3>Услуги</h3>
          <ul>
            <li className={style.services__person}>
              <img src={Person} alt="person"></img>
              Для частных лиц
            </li>
            <Link to="/business">
              <li>
                <img src={Business} alt="small suitcase"></img>
                Для бизнеса
              </li>
            </Link>
          </ul>
          <Link to="/services_for_individuals">
            <button type="submit" className={style.button}>
              Смотреть все
              <div className={style.vector}>
                <Vectorright />
              </div>
            </button>
          </Link>
        </div>

        <Splide
          options={{
            perPage: 4,
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
            height: 560,
            pagination: false,
            arrows: true,
            type: "loop",
            gap: 20,
          }}
          aria-label="Services"
          className={style.custom_splide}
        >
          {cards.map((card) => (
            <SplideSlide
              key={card.id}
              style={{
                display: "flex",
                justifyContent: "center",
                columnGap: 20,
                alignItems: "center",
              }}
            >
              <Card
                icon={card.icon}
                title={card.title}
                text={card.text}
                price={card.price}
              ></Card>
            </SplideSlide>
          ))}
        </Splide>
        <Link to="/services">
            <button type="submit" className={style.buttonmobile}>
              Смотреть все
              <div className={style.vector}>
                <Vectorright />
              </div>
            </button>
          </Link>
      </div>
    </>
  );
}
