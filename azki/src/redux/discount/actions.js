import * as actionTypes from "../actionTypes";


// ** Get third discount
export const getThirdDiscount = () => ({
    type: actionTypes.GET_THIRD_DISCOUNT,
});

export const getThirdDiscountSuccess = (data) => ({
    type: actionTypes.GET_THIRD_DISCOUNT_SUCCESS,
    payload: {
        data,
    },
});

export const getThirdDiscountFailure = () => ({
    type: actionTypes.GET_THIRD_DISCOUNT_FAILURE,
});

export const setSelectedThirdDiscount = (title, id) => ({
    type: actionTypes.SELECTED_THIRD_DISCOUNT,
    payload: {
        title,
        id
    },
});

// ** Get driver discount
export const getDriverDiscount = () => ({
    type: actionTypes.GET_DRIVER_DISCOUNT,
});

export const getDriverDiscountSuccess = (data) => ({
    type: actionTypes.GET_DRIVER_DISCOUNT_SUCCESS,
    payload: {
        data,
    },
});

export const getDriverDiscountFailure = () => ({
    type: actionTypes.GET_DRIVER_DISCOUNT_FAILURE,
});

export const setSelectedDriverDiscount = (title, id) => ({
    type: actionTypes.SELECTED_DRIVER_DISCOUNT,
    payload: {
        title,
        id
    },
});