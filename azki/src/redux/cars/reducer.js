import * as actionTypes from "../actionTypes";


const InitialState = {
    carsList: [],
    getCarsLoading: false,

    selectedCarType: { id: null, title: null },
    selectedCarBrand: { id: null, title: null },
};

const forums = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CAR_TYPES: {
            return {
                ...state,
                getCarsLoading: true,
            };
        }
        case actionTypes.GET_CAR_TYPES_SUCCESS: {
            return {
                ...state,
                carsList: action.payload.data,
                getCarsLoading: false
            };
        }
        case actionTypes.GET_CAR_TYPES_FAILURE: {
            return { ...state, getCarsLoading: false };
        }

        case actionTypes.SELECTED_CAR_TYPE: {
            return { ...state, selectedCarType: { id: action.payload.id, title: action.payload.carType } };
        }

        case actionTypes.SELECTED_CAR_BRAND: {
            return { ...state, selectedCarBrand: { id: action.payload.id, title: action.payload.carBrand } };
        }
        default: {
            return state;
        }
    }
};

export default forums;
