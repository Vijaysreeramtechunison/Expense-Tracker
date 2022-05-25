import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(data) {
  // const [title, setTitle] = useState(data.name); //title is state variable,setTitle is updating the title from ExpenseForm
  // const clickHandler = () => {
  //   setTitle("Updated"); //not change the value for title but schedules the state update
  //   console.log(title);
  // };
  return (
    <div className="expense-item">
      <h4> Item name: {data.name}</h4>
      <h4 className="expense-item__price">Amount: {data.amount}</h4>
      <ExpenseDate Date={data.date} />
    </div>
  );
}
export default ExpenseItem;
