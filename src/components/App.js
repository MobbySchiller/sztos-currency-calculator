import React, { Component } from 'react';
import InputChangeValue from './InputChangeValue';
import InputCurrencies from './InputCurrencies';
import Result from './Result';
import ReplaceCurrenciesButton from './ReplaceCurrenciesButton';
import './App.css';

const API_URL = 'https://api.exchangerate.host/convert?';

class App extends Component {
  state = {
    convertFrom: 'EUR',
    convertTo: 'USD',
    amount: '',
    ratio: null,
  }
  static defaultProps = {
    convertFromText: 'I have',
    convertToText: 'I will have'
  }

  componentDidUpdate = () => {
    if (this.state.convertFrom !== '' && this.state.convertTo !== '') {
      this.fetchData();
    }
  }
  handleInputChangeAmount = (event) => {
    this.setState(() => ({
      amount: event.target.value
    }))
  }
  handleInputChangeFrom = (event) => {
    this.setState(() => ({
      convertFrom: event.target.value
    }))
  }
  handleInputChangeTo = (event) => {
    this.setState(() => ({
      convertTo: event.target.value
    }))
  }
  handleReplaceButton = () => {
    this.setState(() => ({
      convertFrom: this.state.convertTo,
      convertTo: this.state.convertFrom
    }))
  }

  fetchData = () => {
    fetch(`${API_URL}from=${this.state.convertFrom}&to=${this.state.convertTo}`)
      .then(response => response.json())
      .then(data => this.setState(() => ({
        ratio: data.result
      })))
  }

  render() {
    const { amount, convertFrom, convertTo, ratio } = this.state;
    const { convertFromText, convertToText } = this.props;
    return (
      <div className='container'>
        <h1 className='title'>Sztos - currency calculator</h1>
        <main className="dashboard">
          <InputChangeValue handleInput={this.handleInputChangeAmount} amount={amount} id={'amount'} />
          <div className="input-currencies">
            <InputCurrencies handleInputChange={this.handleInputChangeFrom} value={convertFrom} text={convertFromText} id={'from'} />
            <ReplaceCurrenciesButton handleReplace={this.handleReplaceButton} />
            <InputCurrencies handleInputChange={this.handleInputChangeTo} value={convertTo} text={convertToText} id={'to'} />
          </div>
          <Result amount={amount} ratio={ratio} convertTo={convertTo} />
        </main>
      </div>
    )
  }
}

export default App;
