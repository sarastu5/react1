import {createStore} from 'redux'; //jotta voidaan käyttää reduxia, pitää importata createStore

//createStore haluaa aina parametrikseen funktion
const store = createStore((state = {count: 0}) => {
    return state;
});

//palauttaa oikean objektin
console.log(store.getState());