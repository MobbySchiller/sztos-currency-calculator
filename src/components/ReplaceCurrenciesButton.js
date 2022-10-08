import React from 'react';

const ReplaceCurrenciesButton = (props) => {
    return (
        <div onClick={props.handleReplace} className='replace-button'></div>
    )
}

export default ReplaceCurrenciesButton;