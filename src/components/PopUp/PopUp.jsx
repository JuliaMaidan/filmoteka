// import { useState } from 'react';
// // import styles from './popUp.module.scss';

// const PopUp = ({ message, onClose }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleClose = () => {
//     setIsVisible(false);
//     onClose();
//   };

//   return isVisible ? (
//     <div className="popup">
//       <div className="popup-content">
//         <span className="close-button" onClick={handleClose}>
//           &times;
//         </span>
//         <p>{message}</p>
//       </div>
//     </div>
//   ) : null;
// };

// export default PopUp;

import React, { useState, useEffect } from 'react';

const PopUp = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timeout = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 3000); // Час, протягом якого попап буде видимим (в мілісекундах), наприклад, 3000 мс (3 секунди)

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [message, onClose]);

  return isVisible ? (
    <div className="popup">
      <div className="popup-content">
        <p>popup</p>
        <p>{message}</p>
      </div>
    </div>
  ) : null;
};

export default PopUp;
