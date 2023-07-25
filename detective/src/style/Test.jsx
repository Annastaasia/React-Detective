import React, { useState } from 'react';

function ShowMoreItems() {
  const [showItems, setShowItems] = useState(false);
  const [isIconUp, setIsIconUp] = useState(false);

  const handleItemClick = () => {
    setShowItems(!showItems);
    setIsIconUp(!isIconUp);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={handleItemClick}
          style={{ transform: isIconUp ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
        >
          <path
            d="M7 10l5 5 5-5z"
          />
        </svg>
        <span style={{ marginLeft: '8px' }}>{showItems ? 'Скрыть' : 'Показать ещё'}</span>
      </div>
      {showItems && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </div>
      )}
    </div>
  );
}

export default ShowMoreItems;