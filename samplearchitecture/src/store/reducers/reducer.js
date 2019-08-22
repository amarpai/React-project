import {INCREMENT, DECREMENT, CLEAR} from  '../actions/counterActions';

const initialState = {
    counter: 0
}

// 1) will take two things initial state and action
// 2) it has to return a state when its called
// 3) Action should have atlest one paramater "TYPE"(mandate), data to pass is payload (optional)
const reducer = (state=initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                counter: state.counter +1
            }

        case DECREMENT:
            return {
                counter: state.counter - 1
            }

        case CLEAR:
            return {
                counter: 0
            }
    }
    return state

}

export default reducer;