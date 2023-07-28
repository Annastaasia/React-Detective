import style from "./popup.module.scss"

export default function Popup(props) {
  return (props.trigger) ? (
    <div className={style.popup} onClick={() => props.setTrigger(false)}>
      <div className={style.popup_inner}>
        <button className={style.close_btn} onClick={() => props.setTrigger(false)}>close</button>
        {props.children}
      </div>
    </div>
  ) : ""
}