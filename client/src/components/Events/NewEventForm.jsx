// REACT
import React, { useState } from 'react';

// STYLES
import styles from './events.module.css';

// ICONS
import down from '../../assets/chevron-down.svg';
import up from '../../assets/chevron-up.svg';

const NewEventForm = () => {
  const [openColorSelect, setOpenColorSelect] = useState(false);
  const [ selectedColor, setSelectedColor ] = useState('lightgray');

  const toggleColorSelect = () => {
    openColorSelect ? setOpenColorSelect(false) : setOpenColorSelect(true);
  };

  return (
    <form className={styles.eventForm}>
      <div className={styles.inputField}>
        <label className={styles.label} htmlFor='name'>
          Event Name
        </label>
        <input className={styles.input} name='name' type='text' />
      </div>
      <div className={styles.inputField}>
        <label className={styles.label} htmlFor='color'>
          Select Color
        </label>
        <div className={`${styles.selectColor} ${openColorSelect ? styles.active : ''}`}>
          <div className={styles.firstSelect}>
            <div
              className={styles.color}
              value={selectedColor}
              style={{ backgroundColor: selectedColor }}
            />
            <div
              className={styles.openDropdown}
              onClick={() => toggleColorSelect()}
            >
              {openColorSelect ? (
                <img src={up} alt='Close Select Color Menu' />
              ) : (
                <img src={down} alt='Open Select Color Menu' />
              )}
            </div>
          </div>
          <div
            className={`${styles.colorDropdown} ${
              openColorSelect ? styles.showColors : styles.hide
            }`}
          >
            <div
              className={styles.color}
              value='#41994e'
              style={{ backgroundColor: '#41994e' }}
              onClick={() => setSelectedColor('#41994e')}
            />
            <div
              className={styles.color}
              value='#cb0f2f'
              style={{ backgroundColor: '#cb0f2f' }}
              onClick={() => setSelectedColor('#cb0f2f')}
            />
            <div
              className={styles.color}
              value='#8e69ec'
              style={{ backgroundColor: '#8e69ec' }}
              onClick={() => setSelectedColor('#8e69ec')}
            />
            <div
              className={styles.color}
              value='#f99255'
              style={{ backgroundColor: '#f99255' }}
              onClick={() => setSelectedColor('#f99255')}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewEventForm;
