import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./Expense/ExpenseFilter";
import "./Expense.css"
const Expense = (props) => {
  const [FilteredYear, setFilteredYear] = useState("2022");
  const toNewExpenseFilter = (ValuesFromExpenseFilter) => {
    setFilteredYear(ValuesFromExpenseFilter);
    console.log(ValuesFromExpenseFilter);
  };
  const FilteredExpense = props.items.filter((forYear) => {
    return forYear.date.getFullYear().toString() === FilteredYear;
  });
  let ExpenseContent = <h4 className="check">No Data Found</h4>

  if(FilteredExpense.length>0){
    ExpenseContent = FilteredExpense.map((data, index) => (
      <ExpenseItem
        key={index}
        name={data.name}
        amount={data.amount}
        date={data.date}
      />
    ))
  }
  return (
    <div>
      <ExpensesFilter
        Selected={FilteredYear}
        onExpenseFilter={toNewExpenseFilter}
      />
      {ExpenseContent}
    </div>
  );
};
export default Expense;
