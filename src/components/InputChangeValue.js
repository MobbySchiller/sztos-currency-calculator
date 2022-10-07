import React from 'react';

const InputChangeValue = (props) => {
    return (
        <div className="input-amount">
            <h2 className="input-amount__title">Amount</h2>
            <input onChange={props.handleInput} type="number" className="input-amount__input" value={props.amount} placeholder='' />
        </div>
    )
}
export default InputChangeValue;