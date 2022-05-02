import React, { useState } from 'react'
import Expenses from "./components/Expense/Expenses.js";
import NewExpense from './components/NewExpense/NewExpense.js';

function App() {
  const [expenses, setExpenses] = useState([]);
  let id = 0;
  function addNewExpenseItem(newItem) {
    newItem['id'] = id;
    id += 1
    setExpenses((prev) => ([...prev, newItem]));
  }
  return (
    <div>
      <NewExpense newExpenseItem={addNewExpenseItem} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;