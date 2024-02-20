import { DECREMENT, INCREMENT } from "./actionTypes"

const initialState = {
    value: 0,
}

const counterReducer = (state= initialState, action) =>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                value: state.value + 1,
            };
        
        case DECREMENT:
            return{
                ...state,
                // value: state.value - 1,
                value: state.value > 0 ? state.value - 1 : 0,
            }

        default:
            return state;

    }  

}

export default counterReducer;