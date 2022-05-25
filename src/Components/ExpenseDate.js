function ExpenseDate(props) {
  const month = props.Date.toLocaleString("en-US", { month: "long" });
  const date = props.Date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.Date.getFullYear();
  return (
    <div className="expense-date">
      <div>{month}</div>
      <div>{date}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
