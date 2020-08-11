// REACT
import React from 'react';

// NPM PACKAGES
import moment from 'moment';

// ICONS

// COMPONENTS


const Weekdays = ({ currentDate }) => {
  const dayFormat = 'ddd';
  const days = [];
  let startDate = moment(currentDate).startOf('week');

  for (let i = 0; i < 7; i++) {
    days.push(
        <div className='column col-center' key={i}>
        {moment(startDate).add(i, 'days').format(dayFormat)}
        </div>
    );
  };
  return <div className='days row'>{days}</div>;
};

export default Weekdays;
