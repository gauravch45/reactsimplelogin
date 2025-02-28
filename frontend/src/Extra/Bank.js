import React, { useState } from "react";
import "./Bank.css";

function Bank() {
  const [currentbal, setCurrentbal] = useState(0);
  const [updatebal, setUpdatebal] = useState(0);
  const [totalbal, setTotalbal] = useState(0);

  const addBalanceChange = (event) => {
    setUpdatebal(Number(event.target.value));
  };

  const handleUpdateBalance = () => {
    setTotalbal(updatebal + currentbal);
    console.log(totalbal);
    setCurrentbal(totalbal);
  };

  return (
    <div>
      <div className="cont-bank">
        <label>Enter Amount(Rs.): </label>
        <input
          type="number"
          id="balancefield"
          value={updatebal}
          onChange={addBalanceChange}
        />
        <button onClick={handleUpdateBalance}>Add Balance</button>
      </div>
      <div>
        <label>Current Balance: </label>
        <label>{totalbal}</label>
      </div>
    </div>
  );
}

export default Bank;
