import React from 'react';
import Form from './Form.js';
import './NewExpense.css';

function NewExpense(props) {
    function formData(userInput){
        props.newExpenseItem(userInput);
    }
    return (
        <div className="new-expense">
            <Form formData={formData} />
        </div>
    )
}

export default NewExpense;
