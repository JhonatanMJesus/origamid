import React from 'react'
import Styles from './Input.module.css'

const Input = ({label, type, name, value, onChange, error, onBlur}) => {
  return (
    <div className={Styles.wrapper}>
        <label htmlFor={name} className={Styles.label}>
            {label}
        </label>
        <input
            id={name}
            name={name}
            className={Styles.input}
            type={type}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
        />
        {error && <p className={Styles.error}>{error}</p>}
    </div>
  )
}

export default Input