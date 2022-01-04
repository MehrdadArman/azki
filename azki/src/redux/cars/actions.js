import * as actionTypes from "../actionTypes";


// ** get cars action
export const getCarType = () => ({
    type: actionTypes.GET_CAR_TYPES,
});

export const getCarTypeSuccess = (data) => ({
    type: actionTypes.GET_CAR_TYPES_SUCCESS,
    payload: {
        data,
    },
});

export const getCarTypeFailure = () => ({
    type: actionTypes.GET_CAR_TYPES_FAILURE,
});


export const setSelectedCarType = (carType,id) => ({
    type: actionTypes.SELECTED_CAR_TYPE,
    payload: {
        carType,
        id
    },
});
export const setSelectedCarBrand = (carBrand,id) => ({
    type: actionTypes.SELECTED_CAR_BRAND,
    payload: {
        carBrand,
        id
    },
});

