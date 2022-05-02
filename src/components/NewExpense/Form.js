import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm.js'

function Form(props) {
    const [expand, setExpand] = useState(false);

    function collapseForm(){
        setExpand(false);
    }
    
    function expandForm(){
        setExpand(true);
    }

    function formData(userInput){
        props.formData(userInput);
    }

    return (
        <div>
            { expand && <ExpenseForm collapseForm = {collapseForm} formData={formData}/>}
            { !expand && <button onClick={expandForm} >Add Expense</button> }        
        </div>
    )
}

export default Form;
