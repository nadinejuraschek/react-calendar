// REACT
import React from 'react';

// STYLES
import styles from './form.module.css';

const Input = ({ name, type, placeholder, handleChange }) => {
  return (
    <div className={styles.inputField}>
      <label className={styles.label} htmlFor={name}>
        Event Name
      </label>
      <input
        className={styles.input}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Input;