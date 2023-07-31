import style from "./table.module.scss";

export default function Table() {
  const data = [
    {
      name: "Поиск родственников",
      min: "От 50 000 руб",
      medium: "10 000 руб",
      type: "Депозитный",
    },
    {
      name: "Розыск имущества",
      min: "От 50 000 руб",
      medium: "10 000 руб",
      type: "Депозитный",
    },
    {
      name: "Поиск человека по адресу",
      min: "От 50 000 руб",
      medium: "10 000 руб",
      type: "Депозитный",
    },
    {
      name: "Розыск за границей",
      min: "От 50 000 руб",
      medium: "10 000 руб",
      type: "Депозитный",
    },
    {
      name: "Розыск несовершеннолетних",
      min: "От 50 000 руб",
      medium: "10 000 руб",
      type: "Депозитный",
    },
    {
      name: "Розыск имущества наследователя",
      min: "От 50 000 руб",
      medium: "10 000 руб",
      type: "Депозитный",
    },
    {
      name: "Поиск пропавших родственников",
      min: "От 50 000 руб",
      medium: "10 000 руб",
      type: "Депозитный",
    },
    {
      name: "Поиск людей по электронному адесу",
      min: "От 50 000 руб",
      medium: "10 000 руб",
      type: "Депозитный",
    },
  ];
  return (
    <>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th className={style.th1}>Название услуги</th>
            <th className={style.th2}>Размер минимального аванса</th>
            <th className={style.th3}>Средний чек</th>
            <th className={style.th4}>Тип контракта</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className={style.td1}>{row.name}</td>
              <td className={style.td2}>{row.min}</td>
              <td className={style.td3}>{row.medium}</td>
              <td className={style.td4}>{row.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
