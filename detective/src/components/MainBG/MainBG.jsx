import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import Vectorright from "../../assets/svg/Vectorright.jsx";
import style from "./mainbg.module.scss";
import FormError from "../../assets/svg/FormError.jsx";

function MainBG() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

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
          <Link to="/form">
            <button type="submit" className={style.button}>
              Оставить заявку
              <div className={style.vector}>
                <Vectorright />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainBG;
