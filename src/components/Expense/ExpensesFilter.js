import React from 'react'
import './ExpensesFilter.css';

function ExpensesFilter(props) {

  function handleYearChange(event) {
    props.onFilteredYearChange(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label><h3>Filter by year</h3></label>
        <select value={props.year} onChange={handleYearChange}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;