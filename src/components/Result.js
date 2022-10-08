import React from 'react';
import './Result.css';

const Result = (props) => {
    const result = props.amount * props.ratio;
    return (
        <div className='result'>
            <p className='result__value'>{result > 0 ? `${result.toFixed(2)} ${props.convertTo}` : ''}</p>
        </div>
    )
}

export default Result;