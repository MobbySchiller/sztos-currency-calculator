import React from 'react';
import './InputChangeValue.css';

const InputChangeValue = (props) => {
    return (
        <div className="input-amount">
            <label className="input-amount__label" for={props.id}>Amount</label>
            <input onChange={props.handleInput} type="number" id={props.id} className="input-amount__input" value={props.amount} placeholder='' />
        </div>
    )
}
export default InputChangeValue;