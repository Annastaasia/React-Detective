import style from "./popup.module.scss"
import { ReactComponent as Cross } from "../../assets/images/icon-white-cross.svg";

export default function Popup(props) {
  return (props.trigger) ? (
    <div className={style.popup}>
      <div className={style.popup_inner}>
        <button className={style.close_btn} onClick={() => props.setTrigger(false)}><Cross /></button>
        {props.children}
      </div>
    </div>
  ) : ""
}