import React, { useState } from 'react';
import './ExpenseForm.css';

function NewExpenseForm(props) {
    const [userInput, setUserInput] = useState({ 'title': '', 'amount': '', 'date': '' });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserInput((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.formData(userInput);
        props.collapseForm();
        setUserInput({ 'title': '', 'amount': '', 'date': '' })
    }

    function handleCancel(){
        setUserInput({ 'title': '', 'amount': '', 'date': '' })
        props.collapseForm();
    }

    return (
        <div>
            <form action="submit" onSubmit={handleSubmit}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input name="title" type="text" required value={userInput['title']} onChange={handleInputChange} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input name="amount" type="number" required value={userInput['amount']} min="0" onChange={handleInputChange} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input name="date" type="date" required value={userInput['date']} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="new-expense__action">
                    <button name="cancel" type="button" onClick={handleCancel}>Cancel</button>
                    <button name="submit" type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default NewExpenseForm;
