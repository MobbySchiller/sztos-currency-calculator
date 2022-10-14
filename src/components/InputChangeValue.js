import React from 'react';
import './InputChangeValue.css';

const InputChangeValue = ({ id, amount, handleInput }) => (
    <div className="input-amount">
        <label className="label input-amount__label" htmlFor={id}>Amount</label>
        <input onChange={handleInput} type="number" id={id} className="input-amount__input" value={amount} min='0' placeholder='' />
    </div>
)

export default InputChangeValue;