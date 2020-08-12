// REACT
import React, { useEffect, useState } from 'react';

// STYLES
import styles from './datepicker.module.css';

// COMPONENTS
import Cells from './Cells';
import Month from './Month';
import Year from './Year';

const DatePicker = ({ handleDate }) => {
  const [ currentDate, setCurrentDate ] = useState(new Date());
  const [ selectedDate, setSelectedDate ] = useState(new Date());

  const handleDateClick = async (day) => {
    await setSelectedDate(day);
  };

  useEffect(() => {
    handleDate(selectedDate);
  }, [selectedDate]);

  return (
    <div className={styles.container}>
    <div className={styles.calendar}>
      <Year
        currentDate={currentDate}
        handleCurrentDate={setCurrentDate}
      />
      <Month
        currentDate={currentDate}
        handleCurrentDate={setCurrentDate}
      />
      <Cells
        currentDate={currentDate}
        selectedDate={selectedDate}
        handleDateClick={handleDateClick}
      />
    </div>
    </div>
  );
};

export default DatePicker;