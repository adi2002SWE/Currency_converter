import React from "react";

import "./FormAmount.css";

function FormAmount({ onChange }) {
  const handleSelectChange = (e) => {
    const amountToConvert = e.target.value;
    onChange(amountToConvert);
  };
  return (
    <form onChange={handleSelectChange}>
      <div className="Currency-form">
        <h3>Amount to Convert</h3>
        <input
          type="number"
          pattern="[0-9]"
          placeholder="Enter amount to convert"
        ></input>
      </div>
    </form>
  );
}
export default FormAmount;
