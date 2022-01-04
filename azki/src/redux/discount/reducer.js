import * as actionTypes from "../actionTypes";


const InitialState = {
    thirdDiscountList: [],
    getThirdDiscountLoading: false,

    driverDiscountList: [],
    getDriverDiscountLoading: false,

    selectedThirdDiscount: { id: null, title: null },
    selectedDriverDiscount: { id: null, title: null },
};

const discount = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.GET_THIRD_DISCOUNT: {
            return {
                ...state,
                getThirdDiscountLoading: true,
            };
        }
        case actionTypes.GET_THIRD_DISCOUNT_SUCCESS: {
            return {
                ...state,
                thirdDiscountList: action.payload.data,
                getThirdDiscountLoading: false
            };
        }
        case actionTypes.GET_THIRD_DISCOUNT_FAILURE: {
            return { ...state, getThirdDiscountLoading: false };
        }


        case actionTypes.SELECTED_THIRD_DISCOUNT: {
            return { ...state, selectedThirdDiscount: { id: action.payload.id, title: action.payload.title } };
        }


        // ** driver discount 
        case actionTypes.GET_DRIVER_DISCOUNT: {
            return {
                ...state,
                getDriverDiscountLoading: true,
            };
        }
        case actionTypes.GET_DRIVER_DISCOUNT_SUCCESS: {
            return {
                ...state,
                driverDiscountList: action.payload.data,
                getDriverDiscountLoading: false
            };
        }
        case actionTypes.GET_DRIVER_DISCOUNT_FAILURE: {
            return { ...state, getDriverDiscountLoading: false };
        }

        case actionTypes.SELECTED_DRIVER_DISCOUNT: {
            return { ...state, selectedDriverDiscount: { id: action.payload.id, title: action.payload.title } };
        }


        default: {
            return state;
        }
    }
};

export default discount;
