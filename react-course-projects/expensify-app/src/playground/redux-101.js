import {createStore} from 'redux'; //jotta voidaan käyttää reduxia, pitää importata createStore

//createStore haluaa aina parametrikseen funktion
const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
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

//palauttaa oikean objektin
console.log(store.getState());

//Actions - object that gets sent to the store

//increment the count:
store.dispatch({
    type: 'INCREMENT'
});

//decrement the count:
store.dispatch({
    type: 'INCREMENT'
});

//reset the count:
store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});

console.log(store.getState());