import { ACTION_SET_FROM, ACTION_SET_TO } from './actionTypes';

export const setFrom = (from) => ({
    type: ACTION_SET_FROM,
    payload:from
})
export const setTo = (to) => ({
    type: ACTION_SET_TO,
    payload:to
})