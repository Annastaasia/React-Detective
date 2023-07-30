import React, { useState } from "react";
import "./socialmediabuttons.scss";
import { ReactComponent as MediaButttons } from "../../assets/images/bxs_chat.svg";
import Telegram from "../../assets/images/telegram.svg";
import WhatsApp from "../../assets/images/whatsapp.svg";

const SocialMediaButtons = () => {
  const [showButtons, setShowButtons] = useState(false);

  const handleButtonClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className="socmedia_container">
      <button onClick={handleButtonClick} className="socmedia_button">
        <MediaButttons
          alt="socmedia"
          className={`socmedia_icon ${showButtons ? "clicked" : ""}`}
          style={{
            transition: "transform 0.3s ease",
          }}
        />
      </button>
      <div className={`social-buttons ${showButtons ? "show" : "hide"}`}>
        <a
          href="https://t.me/pershin_detective"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Telegram} alt="Telegram" className="socmedia_telegram" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=79686868685&text=Доброго%20времени%20суток!"
          target="_blank"
          rel="noreferrer"
        >
          <img src={WhatsApp} alt="WhatsApp" className="socmedia_whatsapp" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaButtons;
