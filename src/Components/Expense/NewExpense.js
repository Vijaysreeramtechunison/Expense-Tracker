import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
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
      {!isEditing && <Button className="btn btn-primary" onClick={StartEditing}>Add New Expense</Button>}
      {isEditing && <ExpenseForm forCancel={StopEditing} onNewExpense={toExpenseForm} />}<hr/>
    </div>
  );
};
export default NewExpense;
