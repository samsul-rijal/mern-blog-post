import { REGISTER } from "../../actions/userAction";

const initialState = {
    registerResult: false,
    registerLoading: false,
    registerError: false,
}

const register = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER:
            return {
                ...state,
                registerResult: action.payload.data,
                registerLoading: action.payload.loading,
                registerError: action.payload.errorMessage
            }

        default: return state
    }
}
export default register