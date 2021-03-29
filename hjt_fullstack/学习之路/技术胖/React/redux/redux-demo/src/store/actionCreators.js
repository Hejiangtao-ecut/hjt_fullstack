import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes';
import axios from 'axios';
import '../mock/data';

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})
export const addItemAction = (value) => ({
    type: ADD_ITEM,
})
export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})
export const getListAction = (value) => ({
    type: GET_LIST,
    value
})
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/lists')
            .then((res) => {
                // console.log(res);
                const action = getListAction(res.data.list);
                dispatch(action);
            })
    }
}