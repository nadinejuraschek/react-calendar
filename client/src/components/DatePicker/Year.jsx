// REACT
import React from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './datepicker.module.css';

// ICONS
import previous from '../../assets/chevron-left.svg';
import next from '../../assets/chevron-right.svg';

const Year = ({ handleCurrentDate, currentDate }) => {
  const yearFormat = 'YYYY';
  const displayYear = moment(currentDate).format(yearFormat);

  // TEST
  // console.log(displayYear);

  const prevYear = () => {
    const pastDate = moment(currentDate).subtract(1, 'years');
    handleCurrentDate(pastDate);
  };

  const nextYear = () => {
    const futureDate = moment(currentDate).add(1, 'years');
    handleCurrentDate(futureDate);
  };

  return (
    <div className={styles.year}>
      <div className={styles.icon} onClick={prevYear}>
          <img src={previous} alt='Previous Year' />
      </div>
      <div className={styles.monthName}>
          <span>{displayYear}</span>
      </div>
      <div className={styles.icon} onClick={nextYear}>
          <img src={next} alt='Previous Year' />
      </div>
    </div>
  );
};

export default Year;