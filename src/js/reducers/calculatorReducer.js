import { CLICK_NUMBER, CLICK_OPERATOR, CLICK_CLEAR } from '../actions/types';

const initialState = {
    total: '',
    enteringNumber: '',
    pendingOperator: '',
    renderingNumber: '0'
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CLICK_NUMBER:
            var newNumber = state.renderingNumber;
            if (state.pendingOperator.length === 0 && newNumber.length < 12) {
                if (state.renderingNumber === '0') {
                    if (action.payload !== '0' && action.payload !== '.') {
                        return {
                            ...state,
                            renderingNumber: action.payload
                        };                        
                    }
                } else {
                    return {
                        ...state,
                        renderingNumber: state.renderingNumber + action.payload
                    };                    
                }                
            } 
            return state;
        case CLICK_OPERATOR:
            if (state.renderingNumber === '0') {
                return state;
            } 
            if (state.pendingOperator.length === 0) {
                return {
                    ...state,
                    pendingOperator: action.payload
                };
            } else {
                
            }

            return {
                ...state,

            };
        case CLICK_CLEAR:
            return {
                ...state,
                renderingNumber: '0',
                enteringNumber: '',
                pendingOperator: ''
            }
        default:
            return state;
    }
}

