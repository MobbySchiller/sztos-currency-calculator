import React from 'react';
import './InputCurrencies.css';

const InputCurrencies = (props) => {
    return (
        <div className="input-currency">
            <label className="label input-currency__kind" for={props.id}>{props.text}</label>
            <select onChange={props.handleInputChange} id={props.id} className="input-currency__select" value={props.value}>
                <option value="AUD">Australian Dollar</option>
                <option value="BGN">Bulgarian Lev</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="CHF">Swiss Franc</option>
                <option value="CNY">Chinese Yuan</option>
                <option value="CZK">Czech Republic Koruna</option>
                <option value="DKK">Danish Krone</option>
                <option value="EUR">Euro</option>
                <option value="GBP">British Pound Sterling</option>
                <option value="HUF">Hungarian Forint</option>
                <option value="ILS">Israeli New Sheqel</option>
                <option value="INR">Indian Rupee</option>
                <option value="ISK">Icelandic Króna</option>
                <option value="JPY">Japanese Yen</option>
                <option value="KRW">South Korean Won</option>
                <option value="NOK">Norwegian Krone</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="PLN">Polish Zloty</option>
                <option value="RON">Romanian Leu</option>
                <option value="SEK">Swedish Krona</option>
                <option value="TRY">Turkish Lira</option>
                <option value="UAH">Ukrainian Hryvnia</option>
                <option value="USD">United States Dollar</option>
            </select>
        </div>
    )
}

export default InputCurrencies;