import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem.js'
import Card from '../UI/Card.js'
import ExpensesFilter from './ExpensesFilter.js'
import ExpenseChart from './ExpenseChart.js'
import './Expense.css'

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    function createExpense(item) {
        return <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount} />
    }

    function onFilteredYearChange(year) {
        setFilteredYear(year);
    }

    const filteredExpenses = props.expenses.filter((item) => item.date.substr(0, 4) === filteredYear);

    let expenseContent = <h2>No Expense Found</h2>

    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map(createExpense)
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter year={filteredYear} onFilteredYearChange={onFilteredYearChange} />
                <ExpenseChart Expenses={filteredExpenses} />
                {expenseContent}
            </Card>
        </div>
    );
}

export default Expenses;
