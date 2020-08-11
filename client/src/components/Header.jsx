// REACT
import React, { useEffect, useState } from 'react';

// NPM PACKAGES
import moment from 'moment';

// ICONS
import previous from '../assets/chevron-left.svg';
import next from '../assets/chevron-right.svg';

// COMPONENTS


const Header = ({ handleCurrentDate, currentDate }) => {
  const monthFormat = "MMMM YYYY";
  const [ displayMonth, setDisplayMonth ] = useState('');

  useEffect(() => {
    setDisplayMonth(moment(currentDate).format(monthFormat));
    // TEST
    // console.log(displayMonth);
  }, [currentDate]);

  const prevMonth = () => {
    const pastDate = moment(currentDate).subtract(1, 'months');
    handleCurrentDate(pastDate);
  };

  const nextMonth = () => {
    const futureDate = moment(currentDate).add(1, 'months');
    handleCurrentDate(futureDate);
  };

  return (
    <div className='header row flex-middle'>
      <div className='column col-start'>
        <div className='icon' onClick={prevMonth}>
          <img src={previous} alt="Previous Month" />
        </div>
      </div>
      <div className='column col-center'>
        <span>{displayMonth}</span>
      </div>
      <div className='column col-end'>
        <div className='icon' onClick={nextMonth}>
          <img src={next} alt="Previous Month" />
        </div>
      </div>
    </div>
  );
};

export default Header;
