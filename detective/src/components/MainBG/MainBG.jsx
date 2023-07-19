import React from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import Vectorright from "../../assets/svg/Vectorright.jsx";
import style from "./mainbg.module.scss";
// import FormCheck from "../../assets/svg/FormCheck.jsx";
import FormError from "../../assets/svg/FormError.jsx";

function MainBG() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch("register")); // you can watch individual input by pass the name of the input

  return (
    <>
        <div className={style.background}>
          <div className={style.container}>
            <h1 className={style.h1}>perhin & partners</h1>
            <h2 className={style.h2}>детективное агентство в москве</h2>

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
                    {/* <p className={style.p}>Неверно введен номер</p> */}
                    <FormError />
                  </div>
                )}
              </div>

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

              <button type="submit" className={style.button}>
                Оставить заявку
                <div className={style.vector}>
                  <Vectorright />
                </div>
              </button>
            </form>
          </div>

          <div className={style.button_mobile}>
            <button type="submit" className={style.button}>
              Оставить заявку
              <div className={style.vector}>
                <Vectorright />
              </div>
            </button>
          </div>
        </div>
    </>
  );
}

export default MainBG;
