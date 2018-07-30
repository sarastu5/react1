import {createStore} from 'redux'; //jotta voidaan käyttää reduxia, pitää importata createStore

//createStore haluaa aina parametrikseen funktion
const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
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
});

//tätä kutsutaan aina, kun state muuttuu
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Actions - object that gets sent to the store

//increment the count:
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

//decrement the count:
store.dispatch({
    type: 'INCREMENT'
});

//reset the count:
store.dispatch({
    type: 'RESET',
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'DECREMENT',
});

store.dispatch({
    type: 'SET',
    count: 101
});