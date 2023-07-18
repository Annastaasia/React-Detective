import React from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import Vectorright from "../../assets/svg/Vectorright.jsx";
import style from "./mainbg.module.scss";
import FormCheck from "../../assets/svg/FormCheck.jsx";

function MainBG() {
  // const [error, setError] = useState(false);

  // const handleInputChange = (event) => {
  //   const inputValue = event.target.value;
  //   const hasError = inputValue.length === 0;
  //   setError(hasError);
  // };

  // const [inputValue, setInputValue] = useState("");
  // const [hasError, setHasError] = useState(false);

  // const handleInputChange = (event) => {
  //   let value = event.target.value;
  //   setInputValue(value);

  //   // Проверка наличия ошибки
  //   if ((value = "")) {
  //     setHasError(true);
  //   } else {
  //     setHasError(false);
  //   }
  // };

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
      <main>
        <div className={style.background}>
          <div className={style.container}>
            <h1 className={style.h1}>perhin & partners</h1>
            <h2 className={style.h2}>детективное агентство в москве</h2>

            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={style.wrapper}>
                <input
                  {...register("firstName", {
                    required: true,
                  })}
                  className={style.name}
                  type="text"
                  placeholder="Как к вам обращаться?"
                  name="name"
                ></input>
                {errors?.firstName?.type === "required" && (
                  <div className={style.icon}>
                    <FormCheck />
                  </div>
                )}
                {/* {errors?.firstName?.type === "pattern" && (
                  <p>Alphabetical characters only</p>
                )} */}
              </div>

              <InputMask
                className={style.number}
                type="text"
                placeholder="Номер телефона"
                name="number"
                mask="+7 (999) 999-99-99"
                maskChar="_"
              />

              <input
                className={style.question}
                type="aria-text"
                placeholder="Какой вопрос вас беспокоит?"
                name="question"
              ></input>

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
      </main>
    </>
  );
}

export default MainBG;
