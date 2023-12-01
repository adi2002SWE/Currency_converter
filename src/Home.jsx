import "./Home.css";
import Dropdown from "./components/Dropdown.jsx";
import FormAmount from "./components/FormAmount.jsx";
import { useState } from "react";

let baseCurrency = "AED";
let transferCurrency = "AED";
let inputValue = 0;
let convertedValue = 0;

function Home() {
  const [value, setValue] = useState();

  return (
    <div className="Home">
      <div className="Home-body">
        <div>
          <FormAmount onChange={handleFormAmountChange}></FormAmount>
        </div>
        <div className="Dropdowns-container">
          <div className="Dropdown">
            <h3>From:</h3>
            <Dropdown onSelect={handleBaseDropdownSelect}></Dropdown>
          </div>
          <div className="Dropdown">
            <h3>To:</h3>
            <Dropdown onSelect={handleConvertDropdownSelect}></Dropdown>
          </div>
        </div>
        <a>
          {inputValue !== 0 ? `${value} ${transferCurrency}` : ""}
        </a>
      </div>
    </div>
  );
  async function convertUSD(value) {
    var requestURL =
      `https://v6.exchangerate-api.com/v6/347f7ad551cab73486725c31/pair/${baseCurrency}/${transferCurrency}/${value}`
    var response = await fetch(requestURL);
    var responseJSON = await response.json();
    var data = responseJSON.conversion_result;
    convertedValue = data;
    setValue(convertedValue);
  }

  async function handleBaseDropdownSelect(currency) {
    baseCurrency = currency;
    convertUSD(inputValue);
  }

  async function handleConvertDropdownSelect(currency) {
    transferCurrency = currency;
    convertUSD(inputValue);
  }

  async function handleFormAmountChange(value) {
    inputValue = value;
    convertUSD(inputValue);
  }
}

export default Home;
