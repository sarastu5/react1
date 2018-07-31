import {createStore} from 'redux'; //jotta voidaan käyttää reduxia, pitää importata createStore

//Action generators - functions that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//reducers
//kertoo, MITEN tila muuttuu
//key attributes:
//1. pure functions
//2. never change state or action

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }

    if (action.type === 'INCREMENT') {
        return {
            count: state.count + 1
        }
    } else {
        return state;
    }
};

const store = createStore(countReducer);

//tätä kutsutaan aina, kun state muuttuu
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Actions - object that gets sent to the store

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: -100}));