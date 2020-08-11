// REACT
import React from 'react';

// STYLES
import styles from './events.module.css';

// ICONS
import plus from '../../assets/plus.svg';

const NewEventBtn = () => {
  return (
    <div className={styles.roundBtn}>
      <img src={plus} alt="Create New Event" />
    </div>
  );
};

export default NewEventBtn;