// REACT
import React, { useState } from 'react';

// STYLES
import styles from './events.module.css';

// ICONS
import close from '../../assets/close.svg';

// COMPONENTS
import NewEventForm from './NewEventForm/NewEventForm';

const Modal = ({ openModal, handleClose, events }) => {
  const [ eventData, setEventData ] = useState({});

  const handleEventData = async (data) => {
    await setEventData(data);
  };

  const saveEventData = () => {
    events.push(eventData);
    // TEST
    // console.log(eventData);
  };

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
          <NewEventForm events={events} handleEventData={handleEventData} />
        </div>
        <div className={styles.modalFooter}>
          <button
            className={styles.submitBtn}
            onClick={() => saveEventData(eventData)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;