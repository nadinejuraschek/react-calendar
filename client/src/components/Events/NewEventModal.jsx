// REACT
import React from 'react';

// STYLES
import styles from './events.module.css';

// ICONS
import close from '../../assets/close.svg';

const Modal = ({ openModal, handleClose }) => {
    console.log(openModal);
  return (
    <div className={`${styles.modalBg} ${openModal ? styles.show : styles.hide}`}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <div className={styles.closeIcon} onClick={handleClose}>
            <img src={close} alt="Close Modal" />
          </div>
        </div>
        <div className={styles.modalBody}>

        </div>
        <div className={styles.modalFooter}>
            
        </div>
      </div>
    </div>
  );
};

export default Modal;