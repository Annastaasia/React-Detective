import style from "./license.module.scss";
import LicenseImg from "../../assets/images/license.png";

export default function License() {
  return (
    <>
      <div className={style.container}>
        <img src={LicenseImg} alt="license" className={style.img} />
        <div className={style.blok}>
          <h3 className={style.h3}>Лицензия</h3>
          <p className={style.p}>
            Наличие лицензии на профессиональную деятельность – одно из
            преимуществ агентства «PERSHIN&PARTNERS». Наша компания имеет
            законное право на оказание частных сыскных услуг физическим лицам и
            бизнесу.
            <br /> <br />
            Сотрудничество с лицензированными специалистами является для
            Заказчика одной из дополнительных гарантий ответственности и
            профессионализма.
          </p>
        </div>
      </div>
    </>
  );
}
