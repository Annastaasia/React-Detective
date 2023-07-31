import style from "./safety.module.scss";

export default function Safety() {
  return (
    <>
      <section className={style.container}>
        <h3 className={style.h3}>Мы гарантируем сохранять в тайне</h3>
        <div className={style.blok}>
          <ul className={style.ul}>
            <li className={style.li}>Персональные данные Заказчика</li>
            <li className={style.li}>
              Любую приватную информацию, относящуюся к делу
            </li>
            <li className={style.li}>Коммерческую тайну</li>
            <li className={style.li}>Результаты нашей деятельности</li>
            <li className={style.li}>
              Договор об оказании услуг (уничтожается)
            </li>
            <li className={style.li}>
              Факт посещения человеком офиса (любого его присутствия)
            </li>
            <li className={style.li}>Стоимость контракта об оказании услуг</li>
            <li className={style.li}>
              Материалы сообщений, контакты и отчеты (безвозвратное удаление)
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
