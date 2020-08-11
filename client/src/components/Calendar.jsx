// REACT
import React, { useState } from 'react';

// NPM PACKAGES
import moment from 'moment';

// COMPONENTS
import Header from './Header';

const Calendar = () => {
  const [ currentDate, setCurrentDate ] = useState(new Date());
  // set selectedDate === currentDate, so that currentDate is highlighted when calendar is first rendered
  const [ selectedDate, setSelectedDate ] = useState(new Date());

  // TEST
  // console.log(currentDate);

  return (
    <div className='calendar'>
      <Header currentDate={currentDate} handleCurrentDate={setCurrentDate} />
      {/* <div>{daysOfWeek()}</div>
      <div>{cells()}</div> */}
    </div>
  );
};

export default Calendar;
