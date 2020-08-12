// REACT
import React, { useState } from 'react';

// STYLES
import styles from './form.module.css';

// ICONS

// COMPONENTS
import Input from './Input';
import SelectColor from './SelectColor';

const NewEventForm = () => {
  const [ name, setName ] = useState('New Event');
  const [ color, setColor ] = useState('lightgray');

  return (
    <form className={styles.eventForm}>
      <Input
        name='name'
        type='text'
        handleChange={setName}
      />
      <SelectColor
        color={color}
        handleSelectColor={setColor}
      />
    </form>
  );
};

export default NewEventForm;
