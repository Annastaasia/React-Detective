import style from "./services.module.scss";
import cards from "../../components/Card/cards";
import Card from "../../components/Card/Card.jsx";
import Person from "../../assets/images/icon_person.svg";
import Business from "../../assets/images/icon_business.svg";
// import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

export default function Services() {
  return (
    <>
      <div className={style.container}>
        <header className={style.services__header}>
          <h3>Услуги</h3>
          <ul>
            <li>
              <img src={Person} alt="person"></img>
              Для частных лиц
            </li>
            <li>
              <img src={Business} alt="small suitcase"></img>
              Для бизнеса
            </li>
          </ul>
        </header>
        <Splide
          options={{
            perPage: 4,
            perMove: 1,
            rewind: true,
            autoWidth: true,
            height: 560,
            pagination: false,
            arrows: true,
            type: "loop",
          }}
          aria-label="My Favorite Images"
          onMoved={(splide, newIndex) => {
            // eslint-disable-next-line
            console.log("moved", newIndex);
            // eslint-disable-next-line
            console.log("length", splide.length);
          }}
        >
          {/* <div className={style.slider_container}> */}
          {cards.map(
            (card) => (
              // <SplideTrack>
              <SplideSlide key={card.id}>
                <Card
                  icon={card.icon}
                  title={card.title}
                  text={card.text}
                  price={card.price}
                ></Card>
              </SplideSlide>
            )
            // </SplideTrack>
          )}
          {/* </div> */}
        </Splide>
      </div>
    </>
  );
}
