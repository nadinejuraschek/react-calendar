// REACT
import React, { useState } from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './form.module.css';

// ICONS
import down from '../../../assets/chevron-down.svg';
import up from '../../../assets/chevron-up.svg';

// COMPONENTS
import DatePicker from '../../DatePicker/DatePicker';

const SelectDate = ({ date, handleSelectDate }) => {
    const [openDateSelect, setOpenDateSelect] = useState(false);

    const toggleDateSelect = () => {
      openDateSelect ? setOpenDateSelect(false) : setOpenDateSelect(true);
    };

    return (
      <div className={styles.inputField}>
        <label className={styles.label} htmlFor='color'>
          Select Date:
        </label>
        <div className={`${styles.selectDate} ${openDateSelect ? styles.active : ''}`}>
          <div className={styles.firstSelect}>
            <div
              className={styles.date}
              value={date}
            >
              {moment(date).format('DD MMM YYYY')}
            </div>
            <div
              className={styles.openDropdown}
              onClick={() => toggleDateSelect()}
            >
              {openDateSelect ? (
                <img src={up} alt='Close Date Picker' />
              ) : (
                <img src={down} alt='Open Date Picker' />
              )}
            </div>
          </div>
          {
            openDateSelect ? <DatePicker handleDate={handleSelectDate} /> : null
          }
        </div>
      </div>
    );
};

export default SelectDate;
