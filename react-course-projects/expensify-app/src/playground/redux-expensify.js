import {createStore, combineReducers} from 'redux';

const demoState = {
    expenses: [{
        id: 'asdf',
        description: 'January Rent',
        note: 'Final payment',
        amount: 500,
        createdAt: 0
    }],
    filter: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};