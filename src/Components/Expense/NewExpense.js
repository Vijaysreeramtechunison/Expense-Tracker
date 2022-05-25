import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const toExpenseForm = (FromExpenseForm) => {
    const ValuesFromExpenseForm = {
      ...FromExpenseForm, //values from ExpenseForm
      ID: Math.random().toString(),
    };
    props.toNewExpense(ValuesFromExpenseForm);
    setisEditig(false);
  };
  const [isEditing,setisEditig]=useState(false);
  const StartEditing = ()=>{
    setisEditig(true);
  }
  const StopEditing = ()=>{
    setisEditig(false);
  }
  return (
    <div className="bt">
      {!isEditing && <button className="btn btn-outline" onClick={StartEditing}>Add New Expense</button>}
      {isEditing && <ExpenseForm forCancel={StopEditing} onNewExpense={toExpenseForm} />}<hr/>
    </div>
  );
};
export default NewExpense;
