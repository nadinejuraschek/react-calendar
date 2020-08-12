// REACT
import React, { useState } from 'react';

// STYLES
import styles from './form.module.css';

// ICONS

// COMPONENTS
import Input from './Input';
import SelectColor from './SelectColor';
import SelectDate from './SelectDate';

const NewEventForm = () => {
  const [ name, setName ] = useState('New Event');
  const [ color, setColor ] = useState('lightgray');
  const [ date, setDate ] = useState(new Date());

  return (
    <form className={styles.eventForm}>
      <Input
        name='name'
        type='text'
        handleChange={setName}
      />
      <SelectDate
        date={date}
        handleSelectDate={setDate}
      />
      <SelectColor
        color={color}
        handleSelectColor={setColor}
      />
    </form>
  );
};

export default NewEventForm;
