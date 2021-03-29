import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM,GET_LIST } from './actionTypes';
const defaultStore = {
    inputValue: '',
    list: [],
}

function reducer(state = defaultStore, action){
    // console.log(state,action)
    // reducer 里只能接收state，不能改变state
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        if (newState.inputValue === '') {
            return newState;
        }
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value;
        return newState;
    }

        
    return state;
}

export default reducer