import style from "./form.module.scss"
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import FormError from "../../assets/svg/FormError.jsx";
import Vectorright from "../../assets/svg/Vectorright.jsx";

export default function Form(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.isPopup ? props.onButtonClick() : props.onButtonClickShow();
  };
  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.wrapper}>
          <input
            {...register("name", {
              required: true,
            })}
            className={style.name}
            type="text"
            placeholder="Как к вам обращаться?"
          ></input>
          {errors?.name?.type === "required" && (
            <div className={style.icon}>
              <FormError />
            </div>
          )}
        </div>

        <div className={style.wrapper}>
          <InputMask
            {...register("number", {
              required: true,
              minLength: 18,
            })}
            className={style.number}
            type="text"
            placeholder="Номер телефона"
            mask="+7 (999) 999-99-99"
            maskChar=""
          />
          {errors?.number?.type === "required" && (
            <div className={style.icon}>
              <FormError />
            </div>
          )}
          {errors?.number?.type === "minLength" && (
            <div className={style.iconnumber}>
              <FormError />
            </div>
          )}
        </div>

        {props.isPopup ? "" : (
          <div className={style.wrapper}>
            <input
              {...register("question", {
                required: true,
              })}
              className={style.question}
              type="text"
              placeholder="Какой вопрос вас беспокоит?"
            ></input>
            {errors?.question?.type === "required" && (
              <div className={style.icon}>
                <FormError />
              </div>
            )}
          </div>
        )}
        <button type="submit" className={style.button}>
          {props.isOnMain ? "Отправить заявку" : "Отправить"}
          <div className={style.vector}>
            <Vectorright />
          </div>
        </button>
      </form>
    </>
  )
}