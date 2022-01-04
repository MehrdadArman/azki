import * as actionTypes from "../actionTypes";


const InitialState = {
    userData: {},
};

const authentication = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_DATA: {
            console.log(action.payload.userData)
            return { ...state, userData: action.payload.userData };
        }


        default: {
            return state;
        }
    }
};

export default authentication;
