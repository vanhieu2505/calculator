import { CLICK_NUMBER, CLICK_OPERATOR, CLICK_CLEAR } from '../actions/types';

const initialState = {
    isEditingNumber: true,
    total: 0,
    enteringNumber: [],
    pendingOperator: [],
    renderingNumber: '0'
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CLICK_NUMBER:
            if (state.isEditingNumber) {
                if (state.renderingNumber.length < 12) {
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
            } else {                
                return {
                    ...state,
                    enteringNumber: [...state.enteringNumber, state.renderingNumber],                                        
                    renderingNumber: action.payload,
                    isEditingNumber: true
                };
            }
            
            return state;
        case CLICK_OPERATOR:
            if (state.renderingNumber === '0') {
                return state;
            } 
            if (state.isEditingNumber) {
                if (state.pendingOperator.length === 0) {
                    return {
                        ...state,
                        pendingOperator: [...state.pendingOperator, action.payload],
                        isEditingNumber: false
                    };
                } else {
                    if (action.payload === '=') {
                        //calculate and show data
                        let total = parseFloat(state.renderingNumber);
                        
                        for (let i = state.pendingOperator.length - 1; i >= 0; i--) {
                            switch (state.pendingOperator[i]) {
                                case '÷':
                                    total = parseFloat(state.enteringNumber[i]) / total;
                                    break;
                                case '×':                                    
                                    total = parseFloat(state.enteringNumber[i]) * total;
                                    break;
                                case '−':                                
                                    total = parseFloat(state.enteringNumber[i]) - total;
                                    break;
                                case '+':
                                    total = parseFloat(state.enteringNumber[i]) + total;
                                    break;
                            }                            
                        }
                        return {
                            ...state,
                            isEditingNumber: false,
                            total: total,
                            renderingNumber: total.toString(),
                            pendingOperator: '',
                            enteringNumber: [...[], total.toString()]
                        };
                    }

                    var lastOperator = state.pendingOperator[state.pendingOperator.length - 1];
                    if (action.payload === '−' || action.payload === '+') {
                        let total = parseFloat(state.renderingNumber);
                        
                        for (let i = state.pendingOperator.length - 1; i >= 0; i--) {
                            switch (state.pendingOperator[i]) {
                                case '÷':
                                    total = parseFloat(state.enteringNumber[i]) / total;
                                    break;
                                case '×':                                    
                                    total = parseFloat(state.enteringNumber[i]) * total;
                                    break;
                                case '−':                                
                                    total = parseFloat(state.enteringNumber[i]) - total;
                                    break;
                                case '+':
                                    total = parseFloat(state.enteringNumber[i]) + total;
                                    break;
                            }                            
                        }
                        
                        return {
                            ...state,
                            isEditingNumber: false,
                            total: total,
                            renderingNumber: total.toString(),
                            enteringNumber: [...[], total.toString()],
                            pendingOperator: [...[], action.payload]
                        };
                    }
                    if ((lastOperator === '−' || lastOperator === '+') && (action.payload === '÷' || action.payload === '×')) {
                        return {
                            ...state,
                            isEditingNumber: false,
                            pendingOperator: [...state.pendingOperator, action.payload]
                        };
                    }
                    if ((lastOperator === '÷' || lastOperator === '×') && (action.payload === '÷' || action.payload === '×')) {
                        let total = parseFloat(state.renderingNumber);
                        let breakIndex = 0;
                        
                        for (let i = state.pendingOperator.length - 1; i >= 0; i--) {
                            if (state.pendingOperator[i] === '−' || state.pendingOperator[i] === '+') {
                                breakIndex = i;
                                break;
                            }
                            switch (state.pendingOperator[i]) {
                                case '÷':
                                    total = parseFloat(state.enteringNumber[i]) / total;
                                    break;
                                case '×':                                    
                                    total = parseFloat(state.enteringNumber[i]) * total;
                                    break;                                
                            }                            
                        }
                        
                        const updatedPendingOperator = state.pendingOperator.map((item, index) => {
                            if (index <= breakIndex) {
                                return item;
                            }
                        });

                        const updatedPendingNumber = state.enteringNumber.map((item, index) => {
                            if (index <= breakIndex) {
                                return item;
                            }
                        });

                        return {
                            ...state,
                            isEditingNumber: false,
                            renderingNumber: total.toString(),
                            enteringNumber: [...updatedPendingNumber, total.toString()],
                            pendingOperator: [...updatedPendingOperator, action.payload]
                        };
                    }
                }
            } else {
                if (action.payload === '=') {
                    //calculate and show data
                    let total = parseFloat(state.renderingNumber);
                    
                    for (let i = state.pendingOperator.length - 1; i >= 0; i--) {
                        switch (state.pendingOperator[i]) {
                            case '÷':
                                total = parseFloat(state.enteringNumber[i]) / total;                                
                            case '×':
                                total = parseFloat(state.enteringNumber[i]) * total;                                
                            case '−':                                
                                total = parseFloat(state.enteringNumber[i]) - total;
                            case '+':
                                total = parseFloat(state.enteringNumber[i]) + total;
                        }                        
                    }
                }
                const pendingOperator = state.pendingOperator.map((item, index) => {
                    if (index === state.pendingOperator.length - 1) {
                        return action.payload;
                    }
                    return item;
                })
                return {
                    ...state,
                    pendingOperator: pendingOperator
                };
            }            

            return {
                ...state,

            };
        case CLICK_CLEAR:
            return {
                ...state,
                total: 0,
                isEditingNumber: true,
                renderingNumber: '0',
                enteringNumber: '',
                pendingOperator: ''
            }
        default:
            return state;
    }
}

