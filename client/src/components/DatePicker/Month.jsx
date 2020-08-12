// REACT
import React from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './datepicker.module.css';

// ICONS
import previous from '../../assets/chevron-left.svg';
import next from '../../assets/chevron-right.svg';

const Month = ({ handleCurrentDate, currentDate }) => {
  const monthFormat = 'MMMM';
  const displayMonth = moment(currentDate).format(monthFormat);

  // TEST
  // console.log(displayMonth);

  const prevMonth = () => {
    const pastDate = moment(currentDate).subtract(1, 'months');
    handleCurrentDate(pastDate);
  };

  const nextMonth = () => {
    const futureDate = moment(currentDate).add(1, 'months');
    handleCurrentDate(futureDate);
  };

  return (
    <div className={styles.month}>
      <div className={styles.icon} onClick={prevMonth}>
          <img src={previous} alt='Previous Month' />
      </div>
      <div className={styles.monthName}>
          <span>{displayMonth}</span>
      </div>
      <div className={styles.icon} onClick={nextMonth}>
          <img src={next} alt='Previous Month' />
      </div>
    </div>
  );
};

export default Month;