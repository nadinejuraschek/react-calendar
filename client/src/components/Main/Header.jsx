// REACT
import React from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './calendar.module.css';

// ICONS
import previous from '../../assets/chevron-left.svg';
import next from '../../assets/chevron-right.svg';

// COMPONENTS
import NewEventBtn from '../Events/NewEventBtn';

const Header = ({ handleCurrentDate, currentDate }) => {
  const monthFormat = 'MMMM YYYY';
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
    <div className={`${styles.header} ${styles.row}`}>
      <div className={styles.monthDetails}>
        <div className={styles.month}>
          <span>{displayMonth}</span>
        </div>
        <div className={styles.icon} onClick={prevMonth}>
          <img src={previous} alt='Previous Month' />
        </div>
        <div className={styles.icon} onClick={nextMonth}>
          <img src={next} alt='Previous Month' />
        </div>
      </div>
      <NewEventBtn />
    </div>
  );
};

export default Header;
