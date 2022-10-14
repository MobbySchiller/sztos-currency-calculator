import React from 'react';
import './Result.css';

const Result = ({ amount, ratio, convertTo }) => {
    const result = amount * ratio;
    return (
        <div className='result'>
            <p className='result__value'>{result > 0 ? `${result.toFixed(2)} ${convertTo}` : ''}</p>
        </div>
    )
}

export default Result;