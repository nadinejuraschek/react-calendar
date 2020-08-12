// REACT
import React from 'react';

// STYLES
import styles from './events.module.css';

// ICONS
import close from '../../assets/close.svg';

// COMPONENTS
import NewEventForm from './NewEventForm/NewEventForm';

const Modal = ({ openModal, handleClose }) => {
  return (
    <div className={`${styles.modalBg} ${openModal ? styles.show : styles.hide}`}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>
            New Event
          </div>
          <div className={styles.closeIcon} onClick={handleClose}>
            <img src={close} alt="Close Modal" />
          </div>
        </div>
        <div className={styles.modalBody}>
          <NewEventForm />
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.submitBtn}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;