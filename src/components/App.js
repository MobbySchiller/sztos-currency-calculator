import React, { useState, useEffect } from 'react';
import InputChangeValue from './InputChangeValue';
import InputCurrencies from './InputCurrencies';
import Result from './Result';
import ReplaceCurrenciesButton from './ReplaceCurrenciesButton';
import './App.css';

const API_URL = 'https://api.exchangerate.host/convert?';

const App = () => {
  const [convertFrom, setConvertFrom] = useState('EUR');
  const [convertTo, setConvertTo] = useState('USD');
  const [amount, setAmount] = useState('');
  const [ratio, setRatio] = useState(null);

  const convertFromText = 'I have';
  const convertToText = 'I will have';

  const handleInputChangeAmount = (event) => setAmount(() => event.target.value);

  const handleInputChangeFrom = (event) => setConvertFrom(() => event.target.value);

  const handleInputChangeTo = (event) => setConvertTo(() => event.target.value);

  const handleReplaceButton = () => {
    setConvertFrom(convertTo);
    setConvertTo(convertFrom);
  }

  const fetchData = () => {
    fetch(`${API_URL}from=${convertFrom}&to=${convertTo}`)
      .then(response => response.json())
      .then(data => setRatio(data.result))
  }

  useEffect(() => {
    if (convertFrom !== '' && convertTo !== '') {
      fetchData()
    }
  })

  return (
    <div className='container'>
      <h1 className='title'>Sztos - currency calculator</h1>
      <main className="dashboard">
        <InputChangeValue handleInput={handleInputChangeAmount} amount={amount} id={'amount'} />
        <div className="input-currencies">
          <InputCurrencies handleInputChange={handleInputChangeFrom} value={convertFrom} text={convertFromText} id={'from'} />
          <ReplaceCurrenciesButton handleReplace={handleReplaceButton} />
          <InputCurrencies handleInputChange={handleInputChangeTo} value={convertTo} text={convertToText} id={'to'} />
        </div>
        <Result amount={amount} ratio={ratio} convertTo={convertTo} />
      </main>
    </div>
  )
}


export default App;
