import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("");

  const pickedYearDataHandler = (enteredPickedYearData) => {
    setFilteredYear(enteredPickedYearData);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSavePickedYearData={pickedYearDataHandler} />
        {props.items.map((expense) => (
          <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
