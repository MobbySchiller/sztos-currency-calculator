import React, { Component } from 'react';
import InputChangeValue from './InputChangeValue';
import InputCurrencies from './InputCurrencies';
import ReplaceCurrenciesButton from './ReplaceCurrenciesButton';
import './App.css';

class App extends Component {
  state = {
    convertFrom: '',
    convertTo: '',
    amount: '',
    ratio: null,
  }
  static defaultProps = {
    convertFromText: 'I have',
    convertToText: 'I want to have'
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

  render() {
    const { amount, convertFrom, convertTo } = this.state;
    const { convertFromText, convertToText } = this.props;
    return (
      <div className='container'>
        <h1 className='title'>Sztos</h1>
        <main className="dashboard">
          <InputChangeValue handleInput={this.handleInputChangeAmount} amount={amount} />
          <div className="input-currencies">
            <InputCurrencies handleInputChange={this.handleInputChangeFrom} value={convertFrom} text={convertFromText} />
            <ReplaceCurrenciesButton handleReplace={this.handleReplaceButton} />
            <InputCurrencies handleInputChange={this.handleInputChangeTo} value={convertTo} text={convertToText} />
          </div>
          {/* <Result /> */}
        </main>
      </div>
    )
  }
}

export default App;
