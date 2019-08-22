import {ADD, CLEARSTR} from  '../actions/counterActions';

const initialState = {
    data: "hello World",
    counter: 100
}

// 1) will take two things initial state and action
// 2) it has to return a state when its called
// 3) Action should have atlest one paramater "TYPE"(mandate), data to pass is payload (optional)
const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD:
            return {
                ...state,
                data: action.payload
            }

        case CLEARSTR:
            return {
                ...state,
                data: ""
            }
    }
    return state

}

export default reducer;