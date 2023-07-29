import React from "react";
import { Link } from "react-router-dom";
import Vectorright from "../../assets/svg/Vectorright.jsx";
import style from "./mainbg.module.scss";
import Form from "../Form/Form.jsx";
import SecondModal from "../SecondModal/SecondModal.jsx";

function MainBG() {

  return (
    <>
      <div className={style.background}>
        <div className={style.container}>
          <h1 className={style.h1}>perhin & partners</h1>
          <h2 className={style.h2}>детективное агентство в москве</h2>

          <SecondModal isOnMain={true} >
            {/* <Form isOnMain={true} /> */}
          </SecondModal>

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
      </div>
    </>
  );
}

export default MainBG;
