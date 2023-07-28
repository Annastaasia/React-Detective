import React, { useState } from 'react';
import HowToReachUs from "../HowToReachUs/HowToReachUs"
import Thanks from '../ThanksForContactingUs/ThanksForContactingUs';

const SecondModal = () => {
  const [showFirstModal, setShowFirstModal] = useState(true);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleFirstModalButtonClick = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  return (
    <div>
      {showFirstModal && (
        <HowToReachUs onButtonClickShow={handleFirstModalButtonClick} />
      )}
      {showSecondModal && <Thanks />}
    </div>
  );
};

export default SecondModal;