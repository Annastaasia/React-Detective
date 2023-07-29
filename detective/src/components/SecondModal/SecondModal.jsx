import React, { useState } from 'react';
import HowToReachUs from "../HowToReachUs/HowToReachUs"
import Thanks from '../ThanksForContactingUs/ThanksForContactingUs';
import Form from '../Form/Form';

const SecondModal = (props) => {
  const [showFirstModal, setShowFirstModal] = useState(true);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleFirstModalButtonClick = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  return (
    <div>
      {showFirstModal && (
        props.HowToReachUs ? <HowToReachUs onButtonClickShow={handleFirstModalButtonClick} />
          : <Form onButtonClickShow={handleFirstModalButtonClick} isOnMain={`${props.isOnMain}`} />
      )}
      {showSecondModal && (props.HowToReachUs ? <Thanks bg={"#110F0F"} />
        : <Thanks />)}
    </div>
  );
};

export default SecondModal;