import { CLICK_NUMBER, CLICK_OPERATOR, CLICK_CLEAR } from './types';

export const clickNumber = (number) => dispatch => {
    dispatch({
        type: CLICK_NUMBER,
        payload: number
    });
};

export const clickOperator = (operator) => dispatch => {
    dispatch({
        type: CLICK_OPERATOR,
        payload: operator
    });
}

export const clickClear = () => dispatch => {
    dispatch({
        type: CLICK_CLEAR
    });
}