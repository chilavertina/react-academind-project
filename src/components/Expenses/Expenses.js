import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem title={props.troskovi[0].title} amount={props.troskovi[0].amount} date={props.troskovi[0].date} />
      <ExpenseItem title={props.troskovi[1].title} amount={props.troskovi[1].amount} date={props.troskovi[1].date} />
      <ExpenseItem title={props.troskovi[2].title} amount={props.troskovi[2].amount} date={props.troskovi[2].date} />
      <ExpenseItem title={props.troskovi[3].title} amount={props.troskovi[3].amount} date={props.troskovi[3].date} />
    </Card>
  );
}

export default Expenses;
