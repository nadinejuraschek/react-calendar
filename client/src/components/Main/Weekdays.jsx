// REACT
import React from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './calendar.module.css';

// ICONS

// COMPONENTS


const Weekdays = ({ currentDate }) => {
  const dayFormat = 'ddd';
  const days = [];
  const startDate = moment(currentDate).startOf('week');

  for (let i = 0; i < 7; i++) {
    days.push(
        <div className={`${styles.column} ${styles.weekday}`} key={i}>
        {moment(startDate).add(i, 'days').format(dayFormat)}
        </div>
    );
  };
  return <div className={`${styles.days} ${styles.row}`}>{days}</div>;
};

export default Weekdays;
