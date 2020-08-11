// REACT
import React, { useState } from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './calendar.module.css';

// COMPONENTS
import Cells from './Cells';
import Header from './Header';
import Weekdays from './Weekdays';

const Calendar = () => {
  const [ currentDate, setCurrentDate ] = useState(new Date());
  // set selectedDate === currentDate, so that currentDate is highlighted when calendar is first rendered
  const [ selectedDate, setSelectedDate ] = useState(new Date());

  // TEST
  // console.log(currentDate);

  const handleDateClick = async (day) => {
    await setSelectedDate(day);
  };

  // TEST
  console.log(selectedDate);

  return (
    <div className={styles.calendar}>
      <Header currentDate={currentDate} handleCurrentDate={setCurrentDate} />
      <Weekdays currentDate={currentDate} />
      <Cells currentDate={currentDate} selectedDate={selectedDate} handleDateClick={handleDateClick} />
    </div>
  );
};

export default Calendar;
