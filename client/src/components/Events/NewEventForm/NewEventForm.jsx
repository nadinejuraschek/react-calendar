// REACT
import React, { useEffect, useState } from 'react';

// STYLES
import styles from './form.module.css';

// ICONS

// COMPONENTS
import Input from './Input';
import SelectColor from './SelectColor';
import SelectDate from './SelectDate';

const NewEventForm = ({ events, handleEventData }) => {
  const [name, setName] = useState('New Event');
  const [color, setColor] = useState('lightgray');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    handleEventData({
      name: name,
      color: color,
      startDate: startDate,
      endDate: endDate,
    });
  }, [name, color, startDate, endDate]);

  return (
    <form className={styles.eventForm}>
      <Input
        name='name'
        type='text'
        placeholder='New Event'
        handleChange={setName}
      />
      <div className={styles.twoInputFields}>
        <SelectDate
          label='Start Date:'
          date={startDate}
          handleSelectDate={setStartDate}
        />
        <SelectDate
          label='End Date:'
          date={endDate}
          handleSelectDate={setEndDate}
        />
      </div>
      <SelectColor color={color} handleSelectColor={setColor} />
    </form>
  );
};

export default NewEventForm;
