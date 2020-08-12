// REACT
import React, { useState } from 'react';

// STYLES
import styles from './form.module.css';

// ICONS
import down from '../../../assets/chevron-down.svg';
import up from '../../../assets/chevron-up.svg';

const SelectColor = ({ color, handleSelectColor }) => {
    const [openColorSelect, setOpenColorSelect] = useState(false);

    const toggleColorSelect = () => {
      openColorSelect ? setOpenColorSelect(false) : setOpenColorSelect(true);
    };

    return (
      <div className={styles.inputField}>
        <label className={styles.label} htmlFor='color'>
          Select Color:
        </label>
        <div className={`${styles.selectColor} ${openColorSelect ? styles.active : ''}`}>
          <div className={styles.firstSelect}>
            <div
              className={styles.color}
              value={color}
              style={{ backgroundColor: color }}
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
              openColorSelect ? styles.show : styles.hide
            }`}
          >
            <div
              className={styles.color}
              value='#41994e'
              style={{ backgroundColor: '#41994e' }}
              onClick={() => handleSelectColor('#41994e')}
            />
            <div
              className={styles.color}
              value='#cb0f2f'
              style={{ backgroundColor: '#cb0f2f' }}
              onClick={() => handleSelectColor('#cb0f2f')}
            />
            <div
              className={styles.color}
              value='#8e69ec'
              style={{ backgroundColor: '#8e69ec' }}
              onClick={() => handleSelectColor('#8e69ec')}
            />
            <div
              className={styles.color}
              value='#f99255'
              style={{ backgroundColor: '#f99255' }}
              onClick={() => handleSelectColor('#f99255')}
            />
          </div>
        </div>
      </div>
    );
};

export default SelectColor;
