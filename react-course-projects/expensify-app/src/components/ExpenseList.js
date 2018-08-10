import React from 'react';
import {connect} from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.filters.text}
        {props.expenses.length}
    </div>
);

// päivittyy automaattisesti, kun state muuttuu
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};


// connect yhdistää ExpenseListin ja mapStateToPropsin keskenään
export default connect(mapStateToProps)(ExpenseList);