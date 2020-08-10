// REACT
import React, { useState } from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './calendar.module.css';

const Calendar = () => {
  const [ currentDate, setCurrentDate ] = useState(new Date());
  // set selectedDate === currentDate, so that currentDate is highlighted when calendar is first rendered
  const [ selectedDate, setSelectedDate ] = useState(new Date());

  return (
    <div className={styles.calendar}>
      <div>{header()}</div>
      <div>{daysOfWeek()}</div>
      <div>{cells()}</div>
    </div>
  );
};

export default Calendar;
