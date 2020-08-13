// REACT
import React from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './calendar.module.css';

const Cell = ({ day, selectedDate, formattedDate, monthStart, handleDateClick }) => {
  const clickedDate = moment(day).format('DD/MM/YY');
  const checkDate = moment(selectedDate).format('DD/MM/YY');

  return (
    <div
      className={`${styles.gridcell} ${!moment(day).isSame(monthStart, 'month')
      ? `${styles.disabled}` : moment(day).isSame(day, 'month')
      ? `${styles.enabled}` : '' } ${clickedDate === checkDate
      ? `${styles.selected}` : ''}`}
      onClick={() => handleDateClick(day._d)}
    >
    {/* <div
      className={`${styles.column} ${styles.cell} ${!moment(day).isSame(monthStart, 'month')
      ? `${styles.disabled}` : moment(day).isSame(day, 'month')
      ? `${styles.enabled}` : '' } ${clickedDate === checkDate
      ? `${styles.selected}` : ''}`}
      onClick={() => handleDateClick(day._d)}
    > */}
      <span className={styles.number}>{formattedDate}</span>
      <span className={styles.bg}>{formattedDate}</span>
    </div>
  );
};

export default Cell;
