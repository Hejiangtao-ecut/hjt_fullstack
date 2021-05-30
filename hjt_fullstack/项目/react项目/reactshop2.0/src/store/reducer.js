// reducer 状态管理
import { ADDHISTORYWORDS } from './actionTypes';
let oldHistory = localStorage['historyKey'] === undefined ? [] : JSON.parse(localStorage['historyKey'])
const defaultState = {
    historyKey: oldHistory
}

export function hkReducer(state = defaultState, action) {
    switch (action.type) {
        case ADDHISTORYWORDS:
            let newState = JSON.parse(JSON.stringify(state));
            newState.historyKey = [...action.value]
            return newState;
        default:
            return state;
    } 
}