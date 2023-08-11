import style from "./geolocationpage.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import GeoLocationImg from "../../assets/images/geolocation-photo.png";
import Star from "../../assets/images/icon_star.svg";
import { ReactComponent as VectorRight } from "../../assets/images/vectorright.svg";
import { ReactComponent as Binoculars } from "../../assets/images/services-binoculars.svg";
import { ReactComponent as Play } from "../../assets/images/play.svg";
import FAQ from "../../components/FAQ/FAQ";
import Blog from "../../components/Blog/Blog";
import Popup from "../../components/Popup/Popup";
import SecondModal from "../../components/SecondModal/SecondModal";

export default function GeoLocationPage() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <SecondModal HowToReachUs={true} />
      </Popup>

      <main className={style.container}>
        <section className={style.section_header}>
          <Breadcrumbs />
          <h1 className={style.h1}>Пробить геолокацию по номеру телефона</h1>
          <div className={style.blok_header}>
            <div className={style.blok_img}>
              <img
                src={GeoLocationImg}
                alt="geolocation"
                className={style.img}
              />
              <button className={style.play}>
                <a
                  href="https://www.youtube.com/watch?v=kjUEZeDWfHQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Play alt="play" />
                </a>
              </button>
            </div>

            <div className={style.blok_header_text}>
              <p className={style.text_header}>
                Досье на человека — полная информация о конкретной личности,
                которую собирает частный детектив из различных источников.
                Документ может содержать сведения о трудовой деятельности,
                финансовом состоянии, здоровье, хобби, вредных привычках,
                семейных отношениях и о многих других аспектах жизни. После
                сбора информации специалист анализирует полученные данные и
                структурирует. Все сведения являются достоверными.
              </p>
              <div className={style.blok_price}>
                <div className={style.blok_pricesmall}>
                  <p className={style.text_aboutprice}>Минимальный депозит</p>
                  <p className={style.text_price}>1 000 000 руб</p>
                </div>
                <div className={style.blok_pricesmall}>
                  <p className={style.text_aboutprice}>Средний чек</p>
                  <p className={style.text_price}>300 000 руб</p>
                </div>
              </div>
              <div className={style.blok_buy}>
                <button
                  onClick={() => setButtonPopup(true)}
                  className={style.button_buy}
                  type="button"
                >
                  Заказать услугу
                  <VectorRight alt="vector" className={style.icon} />
                </button>

                <div className={style.blokmobile_rating}>
                  <p className={style.text_rating}>5.0</p>
                  <div className={style.blok_star}>
                    <img src={Star} alt="star" className={style.imgstar} />
                    <img src={Star} alt="star" className={style.imgstar} />
                    <img src={Star} alt="star" className={style.imgstar} />
                    <img src={Star} alt="star" className={style.imgstar} />
                    <img src={Star} alt="star" className={style.imgstar} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.section_main}>
          <div className={style.blok_main}>
            <h2 className={style.h2}>
              Когда необходимо заказать досье на человека
            </h2>
            <p className={style.text_main}>
              Полное досье на человека собирается в тех случаях, когда у
              заказчика есть личная заинтересованность в конкретной личности.
              Можно найти информацию о друге, будущей спутнице, новом сотруднике
              компании или о незнакомце, который ведет себя подозрительно.{" "}
              <br /> <br /> Сбор данных может быть связан с обеспечением
              собственной безопасности. Если человеку регулярно поступают угрозы
              на мобильный телефон или в социальных сетях, досье поможет
              определить злоумышленника. <br /> <br />
              Профессиональный сбор информации позволит найти родственников или
              старых знакомых, с которыми давно прервалась связь. Даже если
              человек знает фамилию и имя, самостоятельно искать человека
              слишком затруднительно и затратно по времени.
            </p>
          </div>

          <div className={style.blok_main}>
            <h2 className={style.h2}>Как мы собираем досье</h2>
            <p className={style.text_main}>
              Сбор информации происходит следующим образом:
            </p>
            <ul>
              <li>
                Детективное агентство при необходимости заключает договор с
                заказчиком на поиск достоверной информации.
              </li>
              <li>
                Компания подписывает соглашение о конфиденциальности при
                необходимости.
              </li>
              <li>
                Обговариваются сведения, которые интересуют клиента (чаще всего
                нужна вся информация о физическом лице).
              </li>
              <li>
                Происходит идентификация человека (по номерам телефона, фио,
                аккаунтам в социальных сетях, электронной почте и другим
                контактам).
              </li>
              <li>
                Обсуждение с заказчиком дальнейших действий и направлений
                поиска.
              </li>
              <li>
                Получение сведений из открытых(OSINT) и полу-закрытых(HUMINT)
                источников.
              </li>
            </ul>
            <p className={style.text_main}>
              Досье на человека собирается по четкому алгоритму, но с
              индивидуальными особенностями. Учитывается направление, которое
              нужно клиенту, например, бывшая работа, личная жизнь, наличие
              судимостей и др. Но как правило оно собирается комплексно в едином
              формате компании.
            </p>
          </div>

          <div className={style.blok_main}>
            <h2 className={style.h2}>Что вы получите в отчете</h2>
            <p className={style.text_main}>
              Частный детектив составляет отчет, исходя из поставленной
              заказчиком задачи. В документе будут подробно расписаны сведения о
              физическом лице в рамках информационного досье, который собрал
              лучший отдел аналитики в России.
            </p>
          </div>

          <div className={style.blok_main}>
            <h2 className={style.h2}>Общая информация</h2>
            <p className={style.text_main}>
              Общие сведения будут предоставлены в обязательном порядке, как
              биография из жизни человека. В досье указано следующее:
            </p>
            <ul>
              <li>персональные данные (ФИО, дата рождения)</li>
              <li>подлинность документов</li>
              <li>адреса регистрации</li>
              <li>место фактического проживания</li>
              <li>
                семейное положение (в том числе сведения о бывших браках, даже
                гражданских)
              </li>
              <li>
                данные о близких родственниках (супруг, дети, родители, братья и
                сестры)
              </li>
              <li>
                контактные данные (телефон, аккаунты в социальных сетях, e-mail)
              </li>
            </ul>
            <p className={style.text_main}>
              Предварительно заказчик может запросить поиск более подробной
              информации. Например, ему необходимо знать, кем работает и
              работала жена, образование детей и др. данные, которые могут быть
              добавлены в информационное досье.
            </p>
          </div>

          <div className={style.blok_main}>
            <h2 className={style.h2}>Проверка на негатив</h2>
            <p className={style.text_main}>
              Проверку на негатив часто заказывают работодатели, которые хотят
              узнать информацию о потенциальных сотрудниках. Физическое лицо
              проверяют на наличие судимостей. Дополнительно можно получить
              сведения о ближайших родственниках, у которых были или есть
              проблемы с законом. Особенно это будет актуально при назначении
              сотрудника в федеральную или государственную организацию.
              <br /> <br /> Также в досье фиксируются административные
              правонарушения. Если таких инцидентов было несколько, данные о
              каждом из них структурируют по категориям. Могут быть
              зафиксированы приводы человека в полицию, независимо от того, в
              какой роли: подозреваемый, свидетель или др. В досье заносят
              сведения об учете в наркологическом отделении и психдиспансере.
              Указывают причину постановки на учет, диагноз, время и количество
              периодов пребывания.
            </p>
          </div>

          <div className={style.blok_main}>
            <h2 className={style.h2}>Собственность</h2>
            <p className={style.text_main}>
              Заказчик может получить информацию о том, какое движимое и
              недвижимое имущество находится в собственности у человека. В досье
              будет указано следующее:
            </p>
            <ol className={style.ol_main}>
              <li>
                тип собственности (квартира, дом, земельный участок, автомобиль)
              </li>
              <li>дата приобретения</li>
              <li>способ приобретения (покупка, наследство, дарение)</li>
              <li>
                наличие штрафов или судебных задолженностей (в таком случае
                имущество может быть изъято)
              </li>
            </ol>
            <p className={style.text_main}>
              Клиент запрашивает полный список имущества или отдельные
              категории, например, его может интересовать, есть ли у человека
              автомобиль.
            </p>
          </div>

          <div className={style.blok_main}>
            <h2 className={style.h2}>Финансы</h2>
            <p className={style.text_main}>
              В досье на физическое лицо указывают все источники дохода, в том
              числе неофициальный заработок, прибыль от съема квартиры, фриланс
              и др. В документе будет указан общий доход и средние суммы по
              каждой категории. Если у человека есть неоплаченный кредит,
              ипотека или налог, это будет отражено в досье. Специалист
              указывает банк или организации, в которой у физического лица есть
              задолженность, сумма долга и сведения о попытках погашения
              (например, если человек пришел к соглашению с банком о постепенной
              выплате долга) Также будут указаны все банковские счета и карты
              (дебетовые и кредитные). Специалист возможно выяснит, как часто
              человек ими пользуется, какие операции выполняет чаще всего и на
              что приходится основная часть трат. Дополнительно может быть
              указано участие в предпринимательской деятельности. В учет берутся
              все действия человека, даже если он управлял бизнесом вместе с
              партнерами, или предприятие было просто официально оформлено на
              него (например, для более выгодного расчета налогов на ИП).
            </p>
          </div>

          <div className={style.blok_main}>
            <h2 className={style.h2}>
              Как заказать досье на человека в Москве?
            </h2>
            <p className={style.text_main}>
              В нашем детективном агентстве доступны услуги сбора досье на
              человека. Вы можете заказать получение общей или подробной
              информации о близком родственнике, новом знакомом или
              потенциальном работнике Вашей компании.
              <br /> <br /> Для поиска сведений наши специалисты использую все
              виды источников: открытые и полу-закрытые, большой агентурный
              аппарат и отдел аналитики. Результатом огромного опыта нашей
              работы является эффективный алгоритм составления досье.
              <br /> <br /> В начале сотрудничества мы подробно узнаем от Вас,
              какая конкретная информация о человеке Вам необходима, и с какой
              целью Вам необходимо ее узнать. Каждый пункт и этап составления
              досье согласовывается с Вами. Как только все нюансы будут
              оговорены, мы приступаем к работе.
              <br /> <br /> Узнать точную цену на досье человека можно на
              консультации со специалистом. Стоимость услуг рассчитывается
              индивидуально, с учетом Ваших требований, сроков поиска и типа
              информации. Мы гарантируем получение достоверных сведений в
              кратчайшее время. Если информация нужна в ближайшие сроки, можете
              воспользоваться услугой срочного досье.
            </p>
          </div>

          <div className={style.blok_main}>
            <h2 className={style.h2}>Этапы нашей работы</h2>
            <div className={style.about}>
              <div className={style.blok}>
                <p className={style.number}>1</p>
                <p className={style.title}>Заявка на услугу</p>
                <p className={style.smalltext}>
                  Оставляете заявку любым удобным способом
                </p>
              </div>
              <div className={style.blok}>
                <p className={style.number}>2</p>
                <p className={style.title}>Консультация</p>
                <p className={style.smalltext}>
                  Бесплатная консультация и обсуждение деталей
                </p>
              </div>
              <div className={style.blok}>
                <p className={style.number}>3</p>
                <p className={style.title}>Предоплата</p>
                <p className={style.smalltext}>
                  После обсуждения деталей - внесение предоплаты
                </p>
              </div>
              <div className={style.blok}>
                <p className={style.number}>4</p>
                <p className={style.title}>Выполнение</p>
                <p className={style.smalltext}>
                  Переходим к выполнению поставленных задач
                </p>
              </div>
              <div className={style.blok}>
                <p className={style.number}>5</p>
                <p className={style.title}>Отчет</p>
                <p className={style.smalltext}>
                  Предоставление полного отчета о проделанной работе
                </p>
              </div>
            </div>
          </div>

          <div className={style.blok_main}>
            <h2 className={style.h2}>Похожие услуги</h2>
            <Link to="/">
              <div className={style.button_yet}>
                <div className={style.smallcontainer_yet}>
                  <Binoculars alt="Binoculars" className={style.iconbutton} />
                  <p className={style.button_text}>Компромат на человека</p>
                </div>
                <p className={style.button_price}>От 50 000 руб</p>
              </div>
            </Link>
            <Link to="/">
              <div className={style.button_yet}>
                <div className={style.smallcontainer_yet}>
                  <Binoculars alt="Binoculars" className={style.iconbutton} />
                  <p className={style.button_text}>Организация слежки</p>
                </div>
                <p className={style.button_price}>От 500 000 руб</p>
              </div>
            </Link>
          </div>
        </section>
        <FAQ />
        <Blog />
      </main>
    </>
  );
}
