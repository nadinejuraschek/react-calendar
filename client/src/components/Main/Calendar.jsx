// REACT
import React, { useState } from 'react';

// STYLES
import styles from './calendar.module.css';

// COMPONENTS
import Cells from './Cells';
import Header from './Header';
import Weekdays from './Weekdays';
import NewEventModal from '../Events/NewEventModal';

const Calendar = () => {
  const [ currentDate, setCurrentDate ] = useState(new Date());
  // set selectedDate === currentDate, so that currentDate is highlighted when calendar is first rendered
  const [ selectedDate, setSelectedDate ] = useState(new Date());
  const [ openModal, setOpenModal ] = useState(false);
  const events = [];

  // TEST
  // console.log(currentDate);

  const handleDateClick = async (day) => {
    await setSelectedDate(day);
  };

  // TEST
  // console.log(selectedDate);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
    <div className={styles.calendar}>
      <Header
        currentDate={currentDate}
        handleCurrentDate={setCurrentDate}
        handleOpenModal={setOpenModal}
      />
      <Weekdays
        currentDate={currentDate}
      />
      <Cells
        currentDate={currentDate}
        selectedDate={selectedDate}
        handleDateClick={handleDateClick}
        events={events}
      />
    </div>
    <NewEventModal
      openModal={openModal}
      handleClose={handleClose}
      events={events}
    />
    </>
  );
};

export default Calendar;
