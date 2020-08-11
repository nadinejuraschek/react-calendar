// REACT
import React from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './calendar.module.css';

// ICONS

// COMPONENTS

const Cells = ({ currentDate, handleSelectedDate }) => {
  const dateFormat = 'D';

  const monthStart = moment(currentDate).startOf('month');
  const monthEnd = moment(currentDate).endOf('month');

  const startDate = moment(monthStart).startOf('week');
  const endDate = moment(monthEnd).endOf('week');

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  const onDateClick = day => {
    handleSelectedDate(day);
  };

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
    formattedDate = moment(day).format(dateFormat);
    const cloneDay = day;
    days.push(
       <div
        className={`${styles.column} ${styles.cell} ${!moment(day).isSame(monthStart, 'month')
        ? `${styles.disabled}` : moment(day).isSame(day, 'month')
        ? `${styles.selected}` : "" }`}
        key={day}
        onClick={() => onDateClick(moment(cloneDay))}
        >
        <span className={styles.number}>{formattedDate}</span>
        <span className={styles.bg}>{formattedDate}</span>
      </div>
      );
    day = moment(day).add(1, 'day');
   }
    rows.push(
       <div className={styles.row} key={day}> {days} </div>
     );
    days = [];
  }

  return <div className={styles.body}>{rows}</div>
};

export default Cells;
