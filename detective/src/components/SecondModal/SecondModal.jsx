import React, { useState } from 'react';
import HowToReachUs from "../HowToReachUs/HowToReachUs"
import Thanks from '../ThanksForContactingUs/ThanksForContactingUs';
import Form from '../Form/Form';
import MainMobilePopup from '../MainMobilePopup/MainMobilePopup';

const SecondModal = (props) => {
  const [showFirstModal, setShowFirstModal] = useState(true);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleFirstModalButtonClick = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  return (
    <>
      {showFirstModal && (
        props.HowToReachUs ? <HowToReachUs onButtonClickShow={handleFirstModalButtonClick} />
          : props.isMainMobile ? <MainMobilePopup onButtonClickShow={handleFirstModalButtonClick} /> : <Form onButtonClickShow={handleFirstModalButtonClick} isOnMain={props.isOnMain} />
      )}
      {showSecondModal && (
        props.HowToReachUs || props.isMainMobile ? <Thanks bg={"#110F0F"} />
          : <Thanks width={"95%"} height={"260px"} />)}
    </>
  );
};

export default SecondModal;