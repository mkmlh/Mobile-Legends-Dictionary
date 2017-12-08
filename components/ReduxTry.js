import {createStore,combineReducers} from "redux";


//REDUCER
const heroesReducer=(state={},action)=>{
    switch(action.type){
        case "SET_NAME":
        state={...state,name:action.payload}; //override recent state into parameter 2
        break;
        default:
    }
    return state;
}
const roleReducer=(state={},action)=>{
    switch(action.type){
        case "SET_ROLE":
        state={...state,role:action.payload};
        break;
        default:
    }
    return state;
}

const reducers=combineReducers({
    heroes:heroesReducer,
    role:roleReducer,
})

//STORE
const store = createStore(reducers);

//SUBSCRIBE => Mengetahui perubahan state
store.subscribe(()=>{console.log("store changed",store.getState())})

//DISPATCH
store.dispatch({type:"SET_NAME",payload:"Chou"});
store.dispatch({type:"SET_ROLE",payload:"fighter"});