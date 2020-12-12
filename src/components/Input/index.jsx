import React from 'react'

import './Input.css'

const Input = ({ placeholder, type, label, name, classes, onChange, value , checked}) => {
    return (
        <div className={`input ${classes}`}>
            <input placeholder={placeholder} type={type || 'text'} name={name} onChange={onChange} value={value} checked={checked}/>
            {label && <label htmlFor={name}>{label}</label>}
        </div>
    )
}

export default Input
