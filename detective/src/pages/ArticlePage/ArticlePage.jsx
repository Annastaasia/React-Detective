import React, { useState, useRef, useEffect } from "react";
import Blog from "../Blog/Blog.jsx";
import { Carousel } from "../../components/Carousel/Carousel.jsx";
import style from "./articlepage.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import ArticleMain from "../../assets/images/article-main-photo.png";
import Eye from "../../assets/images/article-eye.svg";
import { ReactComponent as VectotUp } from "../../assets/images/article-icon.svg";
import { FiPlus } from "react-icons/fi";
import Fire from "../../assets/images/article-fire.svg";
import Car from "../../assets/images/article-car.svg";
import Cat from "../../assets/images/article-cat.svg";
import Slider1 from "../../assets/images/article-slider1.png";
import Slider2 from "../../assets/images/article-slider2.png";
import Slider3 from "../../assets/images/article-slider3.png";
import Quote from "../../assets/images/article-quote.svg";
import Info from "../../assets/images/article-info.svg";
import FormPhoto from "../../assets/images/form-foto.png";
import Like from "../../assets/images/article-like.svg";
import Dislike from "../../assets/images/article-dislike.svg";
import Telegram from "../../assets/images/footer-telegram.svg";
import Whatsapp from "../../assets/images/article-whatsapp.svg";
import Vk from "../../assets/images/article-vk.svg";
import Fc from "../../assets/images/article-facebook.svg";

export default function ArticlePage(props) {
  const [showItems, setShowItems] = useState(false);
  const [isIconUp, setIsIconUp] = useState(false);

  const handleItemClick = () => {
    setShowItems(!showItems);
    setIsIconUp(!isIconUp);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const slides = [
    <img src={Slider1} alt="Slider1" className={style.imageslider} />,
    <img src={ArticleMain} alt="Slider2" className={style.imageslider} />,
    <img src={Slider3} alt="Slider3" className={style.imageslider} />,
    <img src={ArticleMain} alt="Slider4" className={style.imageslider} />,
    <img src={Slider1} alt="Slider5" className={style.imageslider} />,
    <img src={ArticleMain} alt="Slider6" className={style.imageslider} />,
  ];

  const [active1, setActive1] = useState(false);

  const contentRef1 = useRef(null);

  useEffect(() => {
    contentRef1.current.style.maxHeight = active1
      ? `${contentRef1.current.scrollHeight}px`
      : "0px";
  }, [contentRef1, active1]);

  const toggleAccordion1 = () => {
    setActive1(!active1);
  };

  const [active2, setActive2] = useState(false);

  const contentRef2 = useRef(null);

  useEffect(() => {
    contentRef2.current.style.maxHeight = active2
      ? `${contentRef2.current.scrollHeight}px`
      : "0px";
  }, [contentRef2, active2]);

  const toggleAccordion2 = () => {
    setActive2(!active2);
  };

  const [active3, setActive3] = useState(false);

  const contentRef3 = useRef(null);

  useEffect(() => {
    contentRef3.current.style.maxHeight = active3
      ? `${contentRef3.current.scrollHeight}px`
      : "0px";
  }, [contentRef3, active3]);

  const toggleAccordion3 = () => {
    setActive3(!active3);
  };

  const [count, setCount] = useState(0);

  const [count2, setCount2] = useState(0);

  return (
    <>
      <main className={style.container}>
        <section className={style.section_header}>
          <Breadcrumbs />
          <img src={ArticleMain} alt="article main" className={style.image} />
          <div className={style.container_time}>
            <div className={style.blok_time}>
              <p className={style.time}>Читать 2 минуты</p>
              <img src={Eye} alt="eye" className={style.icon} />
              <p className={style.time}>999</p>
            </div>
            <p className={style.time}>23.05.2023</p>
          </div>
          <h1 className={style.h1}>Розыск человека и автомобиля</h1>
          <p className={style.text}>
            С другой стороны, синтетическое тестирование, а также свежий взгляд
            на привычные вещи — безусловно открывает новые горизонты для
            укрепления моральных ценностей. С учётом сложившейся международной
            обстановки, новая модель организационной деятельности создаёт
            предпосылки для существующих финансовых и административных условий.
            Банальные, но неопровержимые выводы, а также элементы политического
            процесса, превозмогая сложившуюся непростую экономическую ситуацию,
            в равной степени предоставлены сами себе. Следует{" "}
          </p>
          <div className={style.blok}>
            <div className={style.row}>
              <h3 className={style.h3}>Содержание</h3>

              <VectotUp
                alt="VectotUp"
                className={style.large_icon}
                onClick={handleItemClick}
                style={{
                  transform: isIconUp ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
            {showItems && (
              <ol className={style.bloktext}>
                <li onClick={() => scrollToSection("title1")}>Заголовок</li>
                <li onClick={() => scrollToSection("title2")}>Заголовок</li>
                <ol className={style.bloktext}>
                  <li onClick={() => scrollToSection("subtitle1")}>
                    Подзаголовок
                  </li>
                  <li onClick={() => scrollToSection("subtitle2")}>
                    Подзаголовок
                  </li>
                </ol>
                <li onClick={() => scrollToSection("title3")}>Заголовок</li>
                <li onClick={() => scrollToSection("title4")}>Заголовок</li>
              </ol>
            )}
          </div>
        </section>

        <section className={style.section_titletext}>
          <h2 className={style.h2} id="title1">
            Заголовок
          </h2>
          <p className={style.text}>
            С другой стороны, синтетическое тестирование, а также свежий взгляд
            на привычные вещи — безусловно открывает новые горизонты для
            укрепления моральных ценностей. С учётом сложившейся международной
            обстановки, новая модель организационной деятельности создаёт
            предпосылки для существующих финансовых и административных условий.
            Банальные, но неопровержимые выводы, а также элементы политического
            процесса, превозмогая сложившуюся непростую экономическую ситуацию,
            в равной степени предоставлены сами себе. Следует отметить, что
            граница обучения кадров говорит о возможностях своевременного{" "}
          </p>
        </section>

        <section className={style.section_tablesvg}>
          <h2 className={style.h2}>Заголовок</h2>
          <div className={style.about}>
            <div className={style.blokabout}>
              <img src={Fire} alt="fire" className={style.img} />
              <h3 className={style.title}>Подзаголовок</h3>
              <p className={style.smalltext}>
                С другой стороны, синтетическое тестирование, а также свежий
                взгляд на привычные вещи — безусловно открывает новые горизонты
                для укрепления
              </p>
            </div>
            <div className={style.blokabout}>
              <img src={Car} alt="car" className={style.img} />
              <h3 className={style.title}>Подзаголовок</h3>
              <p className={style.smalltext}>
                С другой стороны, синтетическое тестирование, а также свежий
                взгляд на привычные вещи — безусловно открывает новые горизонты
                для укрепления
              </p>
            </div>
            <div className={style.blokabout}>
              <img src={Cat} alt="cat" className={style.img} />
              <h3 className={style.title}>Подзаголовок</h3>
              <p className={style.smalltext}>
                С другой стороны, синтетическое тестирование, а также свежий
                взгляд на привычные вещи — безусловно открывает новые горизонты
                для укрепления
              </p>
            </div>
          </div>
        </section>

        <section className={style.section_titletext}>
          <h2 className={style.h2} id="title2">
            Заголовок
          </h2>
          <div className={style.numbers}>
            <div className={style.blok_numbers}>
              <p className={style.number}>1</p>
              <h3 className={style.title_numbers}>Подзаголовок</h3>
              <p className={style.smalltext_numbers}>
                С другой стороны, синтетическое тестирование, а также свежий
                взгляд на привычные вещи — безусловно открывает новые горизонты
                для укрепления
              </p>
            </div>
            <div className={style.blok_numbers}>
              <p className={style.number}>2</p>
              <h3 className={style.title_numbers}>Подзаголовок</h3>
              <p className={style.smalltext_numbers}>
                С другой стороны, синтетическое тестирование, а также свежий
                взгляд на привычные вещи — безусловно открывает новые горизонты
                для укрепления
              </p>
            </div>
            <div className={style.blok_numbers}>
              <p className={style.number}>3</p>
              <h3 className={style.title_numbers}>Подзаголовок</h3>
              <p className={style.smalltext_numbers}>
                С другой стороны, синтетическое тестирование, а также свежий
                взгляд на привычные вещи — безусловно открывает новые горизонты
                для укрепления
              </p>
            </div>
          </div>
        </section>

        <section className={style.section_titletext}>
          <h2 className={style.h2}>Заголовок</h2>
          <Carousel>{slides}</Carousel>
        </section>

        <section className={style.section_titletext}>
          <h2 className={style.h2}>Заголовок</h2>
          <div className={style.blok_titletext}>
            <img src={Slider2} alt="slider2" className={style.image} />
            <p className={style.text}>Подпись к фото</p>
          </div>
        </section>

        <section className={style.section_titletext}>
          <h2 className={style.h2} id="title3">
            Заголовок
          </h2>
          <p className={style.text}>
            С другой стороны, синтетическое тестирование, а также свежий взгляд
            на привычные вещи — безусловно открывает новые горизонты для
            укрепления моральных ценностей. С учётом сложившейся международной
            обстановки, новая модель организационной деятельности создаёт
            предпосылки для существующих финансовых и административных условий.
            Банальные, но неопровержимые выводы, а также элементы политического
            процесса, превозмогая сложившуюся непростую экономическую ситуацию,
            в равной степени предоставлены сами себе. Следует отметить, что
            граница обучения кадров говорит о возможностях своевременного{" "}
          </p>
        </section>

        <section className={style.section_quote}>
          <img src={Quote} alt="Quote" className={style.img} />
          <div className={style.blok_quote}>
            <p className={style.text}>
              С другой стороны, синтетическое тестирование, а также свежий
              взгляд на привычные вещи — безусловно открывает новые горизонты
              для укрепления моральных ценностей. С учётом сложившейся
              международной обстановки, новая модель организационной
              деятельности создаёт предпосылки для существующих финансовых и
              административных условий. Банальные, но неопровержимые выводы, а
              также элементы политического процесса, превозмогая
            </p>
            <div className={style.blokdirector}>
              <img src={FormPhoto} alt="director" className={style.photo} />
              <p className={style.text}>
                Першин Кирилл Олегович
                <br />
                <span className={style.textdirector}>
                  Руководитель детективного агентства
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className={style.section_titletext}>
          <h2 className={style.h2} id="title4">
            Заголовок
          </h2>
          <div className={style.blok_titletext}>
            <h3 className={style.h3} id="subtitle1">
              Подзаголовок
            </h3>
            <p className={style.text}>
              С другой стороны, синтетическое тестирование, а также свежий
              взгляд на привычные вещи — безусловно открывает новые горизонты
              для укрепления моральных ценностей. С учётом сложившейся
              международной обстановки, новая модель организационной
              деятельности создаёт предпосылки для существующих финансовых и
              административных условий. Банальные, но неопровержимые выводы, а
              также элементы политического процесса, превозмогая сложившуюся
              непростую экономическую ситуацию, в равной степени предоставлены
              сами себе. Следует отметить, что граница обучения кадров говорит о
              возможностях своевременного{" "}
            </p>
          </div>
          <div className={style.blok_titletext}>
            <h3 className={style.h3} id="subtitle2">
              Подзаголовок
            </h3>
            <p className={style.text}>
              С другой стороны, синтетическое тестирование, а также свежий
              взгляд на привычные вещи — безусловно открывает новые горизонты
              для укрепления моральных ценностей. С учётом сложившейся
              международной обстановки, новая модель организационной
              деятельности создаёт предпосылки для существующих финансовых и
              административных условий. Банальные, но неопровержимые выводы, а
              также элементы политического процесса, превозмогая сложившуюся
              непростую экономическую ситуацию, в равной степени предоставлены
              сами себе. Следует отметить, что граница обучения кадров говорит о
              возможностях своевременного{" "}
            </p>
          </div>
        </section>

        <section className={style.section_titletext}>
          <img src={Slider3} alt="Slider3" className={style.image} />
        </section>

        <section className={style.section_gray}>
          <img src={Quote} alt="Quote" className={style.img} />
          <p className={style.text}>
            С другой стороны, синтетическое тестирование, а также свежий взгляд
            на привычные вещи — безусловно открывает новые горизонты для
            укрепления моральных ценностей. С учётом сложившейся международной
            обстановки, новая модель организационной деятельности создаёт
            предпосылки для существующих финансовых и административных условий.
            Банальные, но неопровержимые выводы, а также элементы политического
            процесса, превозмогая
          </p>
        </section>

        <section className={style.section_gray}>
          <img src={Info} alt="Info" className={style.img} />
          <p className={style.text}>
            С другой стороны, синтетическое тестирование, а также свежий взгляд
            на привычные вещи — безусловно открывает новые горизонты для
            укрепления моральных ценностей. С учётом сложившейся международной
            обстановки, новая модель организационной деятельности создаёт
            предпосылки для существующих финансовых и административных условий.
            Банальные, но неопровержимые выводы, а также элементы политического
            процесса, превозмогая
          </p>
        </section>

        <section className={style.section_question}>
          <h2 className={style.h2}>Ответы на популярные вопросы</h2>
          <button
            className={`question-section ${active1}`}
            onClick={toggleAccordion1}
          >
            <div>
              <div className="question-align">
                <p className="question-style">Вопрос 1</p>
                <FiPlus
                  className={active1 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef1}
                className={active1 ? `answer answer-divider` : `answer`}
              >
                <p>
                  Предварительные выводы неутешительны: дальнейшее развитие
                  различных форм деятельности создаёт предпосылки для
                  переосмысления внешнеэкономических политик. С другой стороны,
                  базовый вектор развития обеспечивает актуальность поставленных
                  обществом задач. Каждый из нас понимает очевидную вещь:
                  выбранный нами инновационный путь обеспечивает актуальность
                  вывода текущих активов.
                </p>
              </div>
            </div>
          </button>

          <button
            className={`question-section ${active2}`}
            onClick={toggleAccordion2}
          >
            <div>
              <div className="question-align">
                <p className="question-style">Вопрос 2</p>
                <FiPlus
                  className={active2 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef2}
                className={active2 ? `answer answer-divider` : `answer`}
              >
                <p>
                  Предварительные выводы неутешительны: дальнейшее развитие
                  различных форм деятельности создаёт предпосылки для
                  переосмысления внешнеэкономических политик. С другой стороны,
                  базовый вектор развития обеспечивает актуальность поставленных
                  обществом задач. Каждый из нас понимает очевидную вещь:
                  выбранный нами инновационный путь обеспечивает актуальность
                  вывода текущих активов.
                </p>
              </div>
            </div>
          </button>

          <button
            className={`question-section ${active3}`}
            onClick={toggleAccordion3}
          >
            <div>
              <div className="question-align">
                <p className="question-style">Вопрос 3</p>
                <FiPlus
                  className={active3 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef3}
                className={active3 ? `answer answer-divider` : `answer`}
              >
                <p>
                  Предварительные выводы неутешительны: дальнейшее развитие
                  различных форм деятельности создаёт предпосылки для
                  переосмысления внешнеэкономических политик. С другой стороны,
                  базовый вектор развития обеспечивает актуальность поставленных
                  обществом задач. Каждый из нас понимает очевидную вещь:
                  выбранный нами инновационный путь обеспечивает актуальность
                  вывода текущих активов.
                </p>
              </div>
            </div>
          </button>
        </section>

        <section className={style.section_autor}>
          <img src={FormPhoto} alt="director" className={style.photo} />
          <p className={style.textautor}>
            Автор статьи
            <br />
            <span className={style.textautordirector}>
              Першин Кирилл Олегович
            </span>
          </p>
        </section>

        <section className={style.section_socnet}>
          <div className={style.button_socnet}>
            <button
              onClick={() => setCount(count + 1)}
              type="button"
              className={style.like}
            >
              <img src={Like} alt="Like" />
              {count}
            </button>
            <button
              onClick={() => setCount2(count2 + 1)}
              type="button"
              className={style.dislike}
            >
              <img src={Dislike} alt="Dislike" />
              {count2}
            </button>
          </div>
          <div className={style.bloksocnet}>
            <p className={style.p}>Поделиться</p>

            <div className={style.blokmobile}>
              <a
                className={style.bloknet}
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Telegram} alt="Telegram" className={style.socnet} />
              </a>

              <a
                className={style.bloknet}
                href="https://api.whatsapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Whatsapp} alt="Whatsapp" className={style.socnet} />
              </a>

              <a
                className={style.bloknet}
                href="https://vk.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Vk} alt="Vk" className={style.socnet} />
              </a>

              <a
                className={style.bloknet}
                href="https://es-es.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Fc} alt="Fc" className={style.socnet} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <main>
        <Blog />
      </main>
    </>
  );
}
