import Form from "../Form/Form";
import style from "./mainmobilepopup.module.scss"

export default function MainMobilePopup(props) {

  return (
    <div className={style.mainmobile_container} >
      <h4 className={style.mainmobile_title}>Оставить заявку</h4>
      <Form isOnMain={false} onButtonClickShow={props.onButtonClickShow} />
    </div>
  )
}