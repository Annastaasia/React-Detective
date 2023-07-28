import style from "./about.module.scss";
import Img from "../../assets/images/about.png";

export default function About() {
  return (
    <>
      <section className={style.container}>
        <div className={style.left}>
          <h3 className={style.h3}>О нас</h3>
          <p className={style.p}>
            <span className={style.partners}>PERSHIN & PARTNERS</span> - это
            международное детективное агентство нового формата, практикующие
            наиболее эффективные методы работы на рынке детективных услуг. С
            помощью современного аналитического отдела по поиску информации,
            оперативных комбинаций и стратегии разведывательного подхода
            посредством внедрения- компания решает сложнейшие задачи в семейных
            конфликтах, проблемах с детьми и подростками, информационных войн с
            конкурентами, коммерческой разведке и других серьезных проблемах.{" "}
            <br /> <br />
            Руководитель и лицо компании - Першин Кирилл Олегович – имеет
            большой эмпирический опыт в оказании детективных услуг, состоит в
            партнерских отношениях с ведущим медийным детективным агентством
            «Legion», является участником международных ассоциации детективов,
            ведет открытую и прозрачную политику работы, призывает не верить на
            слово своих заказчиков, а опираться только на подробные отчёты и
            факты. Кирилл Олегович активно ведёт свой YouTube блог и социальные
            сети, где как специалист по безопасности даёт необходимые
            рекомендации, полезный материал и рассказывает о своих услугах и
            принципах их оказания.
          </p>
        </div>
        <div className={style.right}>
          <img src={Img} alt="img" className={style.img} />
          <div className={style.about}>
            <div className={style.blok}>
              <p className={style.number}>1</p>
              <p className={style.title}>Современная команда</p>
              <p className={style.smalltext}>
                Подход к делу наших опытных сотрудников и методы работы отличает
                нас от других детективных агентств.
              </p>
            </div>
            <div className={style.blok}>
              <p className={style.number}>2</p>
              <p className={style.title}>Мы - 100% конфиденциальность</p>
              <p className={style.smalltext}>
                На нашем YouTube канале Кирилл рассказал о гарантиях
                конфиденциальности в нашей компании.
              </p>
            </div>
            <div className={style.blok}>
              <p className={style.number}>3</p>
              <p className={style.title}>Прагматичный подход</p>
              <p className={style.smalltext}>
                Мы заинтересованы в результате, нам не интересно тянуть ваш кейс
                годами, мы за прагматизм дела.
              </p>
            </div>
            <div className={style.blok}>
              <p className={style.number}>4</p>
              <p className={style.title}>Эмпирический опыт</p>
              <p className={style.smalltext}>
                Наша компания более 5 лет расследует и решает нестандартные
                личные, семейные и бизнес проблемы
              </p>
            </div>
            <div className={style.blok}>
              <p className={style.number}>5</p>
              <p className={style.title}>Доверие к нашей компани</p>
              <p className={style.smalltext}>
                Сложно доверять тем, кто в тени, но наша компания имеет личный
                бренд, который можно потерять лишь один раз.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
