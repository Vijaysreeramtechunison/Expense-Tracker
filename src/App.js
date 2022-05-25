import React, { useState } from "react";
import "./App.css";
import Expense from "./Components/Expense";
import NewExpense from "./Components/Expense/NewExpense";
// import 'bootstrap/dist/css/bootstrap.min.css';

const DummyItems = [
  { name: "Pen", amount: "10", date: new Date(2022, 3, 11) },
  { name: "Pencil", amount: "20", date: new Date(2021, 4, 12) },
  { name: "Ink", amount: "25", date: new Date(2022, 5, 20) },
  { name: "Bag", amount: "15", date: new Date(2020, 7, 12) },
];
function App() {
  const [expenses, setExpenses] = useState(DummyItems);
  const toApp = (expense) => {
    setExpenses((PrevExpense) => {
      return [expense, ...PrevExpense];
    });
    console.log(expenses);
    console.log(expense);
  };
  const FromFilterDate = (ForFilterDate) => {
    console.log(ForFilterDate);
  };
  return (
    <div className="expenses">
      <h1 className="header">Expense Tracker<hr/> </h1><br/>
      <NewExpense toNewExpense={toApp} toNewFilter={FromFilterDate} />
      <Expense items={expenses} />
    </div>
  );
}
export default App;
