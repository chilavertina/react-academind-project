import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem title={props.troskovi[0].title} amount={props.troskovi[0].amount} date={props.troskovi[0].date} />
      <ExpenseItem title={props.troskovi[1].title} amount={props.troskovi[1].amount} date={props.troskovi[1].date} />
      <ExpenseItem title={props.troskovi[2].title} amount={props.troskovi[2].amount} date={props.troskovi[2].date} />
      <ExpenseItem title={props.troskovi[3].title} amount={props.troskovi[3].amount} date={props.troskovi[3].date} />
    </div>
  );
}

export default Expenses;
