// REACT
import React from 'react';

// NPM PACKAGES
import moment from 'moment';

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
        className={`column cell ${!moment(day).isSame(monthStart, 'month')
        ? "disabled" : moment(day).isSame(day, 'month')
        ? "selected" : "" }`}
        key={day}
        onClick={() => onDateClick(moment(day))}
        >
        <span className="number">{formattedDate}</span>
        <span className="bg">{formattedDate}</span>
      </div>
      );
    day = moment(day).add(1, 'day');
   }
    rows.push(
       <div className="row" key={day}> {days} </div>
     );
    days = [];
  }

  return <div className='body'>{rows}</div>
};

export default Cells;
