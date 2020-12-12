import React from 'react';

import './Button.css';

const Button = ({ name, disabled, handleClick }) => {
    return (
        <div className="button">
            <button disabled={disabled} onClick={handleClick}>{name}</button>
        </div>
    )
}

export default Button
