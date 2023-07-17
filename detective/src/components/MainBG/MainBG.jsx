import Vectorright from "../../assets/svg/Vectorright.jsx";
import style from "./mainbg.module.scss";

function MainBG() {
  return (
    <>
      <main>
        <div className={style.background}>
          <div className={style.container}>
            <h1 className={style.h1}>perhin & partners</h1>
            <h2 className={style.h2}>детективное агентство в москве</h2>
            <form className={style.form}>
              <input
                className={style.name}
                type="text"
                placeholder="Как к вам обращаться?"
                name="name"
              ></input>

              <input
                className={style.number}
                type="number"
                placeholder="Номер телефона"
                name="number"
              ></input>

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

          {/* <form onSubmit={handleSubmit(onSubmit)}>
            { <span>
              <Input
                {...register("phone")}
                placeholder="+7 (999) 999-99-99"
                inputComponent={PhoneMask}
              />

              {errors.phone && <p className="error">{errors.phone.message}</p>}
            </span> }

            <span>
              <p>Email</p>
              <Input {...register("email")} placeholder="example@mail.ru" />

              {errors.email && (
                <p className={style.error}>{errors.email.message}</p>
              )}
            </span>

            <div className={style.start_button}>
              <button type="submit" className={style.button}>
                Lets go
              </button>
            </div>
          </form> */}
        </div>
      </main>
    </>
  );
}

export default MainBG;
