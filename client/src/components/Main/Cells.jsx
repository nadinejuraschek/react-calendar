// REACT
import React from 'react';

// NPM PACKAGES
import moment from 'moment';

// STYLES
import styles from './calendar.module.css';

// ICONS

// COMPONENTS
import Cell from './Cell';

const Cells = ({ currentDate, selectedDate, handleDateClick, events }) => {
  const dateFormat = 'D';

  const monthStart = moment(currentDate).startOf('month');
  const monthEnd = moment(currentDate).endOf('month');

  const startDate = moment(monthStart).startOf('week');
  const endDate = moment(monthEnd).endOf('week');

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  let caldays = [];

  // while (day <= endDate) {
  //   for (let i = 0; i < 7; i++) {
  //   formattedDate = moment(day).format(dateFormat);
  //   days.push(
  //     <Cell
  //       day={day}
  //       formattedDate={formattedDate}
  //       monthStart={monthStart}
  //       selectedDate={selectedDate}
  //       key={day}
  //       handleDateClick={handleDateClick}
  //     />
  //   );
  //   day = moment(day).add(1, 'day');
  //  }
  //   rows.push(
  //      <div className={styles.row} key={day}> {days} </div>
  //    );
  //   days = [];
  // }

  // return <div className={styles.body}>{rows}</div>;

  while (day <= endDate) {
      for (let i = 0; i < 42; i++) {
      formattedDate = moment(day).format(dateFormat);
      caldays.push(
        <Cell
          day={day}
          formattedDate={formattedDate}
          monthStart={monthStart}
          selectedDate={selectedDate}
          key={day}
          handleDateClick={handleDateClick}
        />
      );
      day = moment(day).add(1, 'day');
     }
      // rows.push(
      //    <div className={styles.row} key={day}> {days} </div>
      //  );
      // days = [];
    }
    return <div className={styles.grid}>{ caldays } </div>
};

export default Cells;
