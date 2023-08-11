import React from "react";
import Vectorright from "../../assets/svg/Vectorright.jsx";
import style from "./mainbg.module.scss";
import SecondModal from "../SecondModal/SecondModal.jsx";
import Popup from "../Popup/Popup.jsx";
import { useState } from "react";
import SocialMediaButtons from "../SocialMediaButtons/SocialMediaButtons.jsx";

function MainBG() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <section className={style.background}>
        <div className={style.container}>
          <h1 className={style.h1}>perhin & partners</h1>
          <h2 className={style.h2}>детективное агентство в москве</h2>

          <SecondModal isOnMain={true}></SecondModal>

          <SocialMediaButtons />
        </div>
      </section>
      <div className={style.button_mobile}>
        <button
          type="submit"
          className={style.button}
          onClick={() => setButtonPopup(true)}
        >
          Оставить заявку
          <div className={style.vector}>
            <Vectorright />
          </div>
        </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <SecondModal isMainMobile={true} />
        </Popup>
      </div>
    </>
  );
}

export default MainBG;
