import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [Newname, setNewname] = useState("");
  const [NewAmount, setAmoount] = useState("");
  const [NewDate, setDate] = useState("");
  const TitleChange = (event) => {
    setNewname(event.target.value);
  };
  const AmountChange = (event) => {
    setAmoount(event.target.value);
  };
  const DateChange = (event) => {
    setDate(event.target.value);
  };
  const SubmitValue = (event) => {
    event.preventDefault(); //default js..if it not use,it reloads the page if we submit
    const Datas = {
      name: Newname,
      amount: NewAmount,
      date: new Date(NewDate),
    };
    console.log(Datas);
    props.onNewExpense(Datas); //to pass the value to NewExpense
    setNewname(""); //for empty the fields
    setAmoount("");
    setDate("");
  };
  return (
    <form className="div" onSubmit={SubmitValue}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Item:</label>
          <input
            type="text"
            value={Newname}
            onChange={TitleChange}
            placeholder="Enter Item"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Expense Amount:</label>
          <input
            type="number"
            min="0"
            step="1"
            value={NewAmount}
            onChange={AmountChange}
            placeholder="Enter Amount"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            value={NewDate}
            onChange={DateChange}
            min="2019-01-01"
            max="2022-12-31"
          ></input>
        </div>
      </div>
      <span className="button">
        <button className="btn btn-outline-primary" type="submit">
          Add Expense
        </button>
        &emsp;
        <button
          className="btn btn-outline-primary"
          onClick={props.forCancel}
          type="button"
        >
          Cancel
        </button>
      </span>
    </form>
  );
};
export default ExpenseForm;
