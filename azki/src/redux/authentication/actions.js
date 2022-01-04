import * as actionTypes from "../actionTypes";


export const setUserData = (userData) => ({
    type: actionTypes.SET_USER_DATA,
    payload: {
        userData,
    },
});