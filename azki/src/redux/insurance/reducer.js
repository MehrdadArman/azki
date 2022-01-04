import * as actionTypes from "../actionTypes";


const InitialState = {
    insuranceList: [],
    getInsuranceLoading: false,

    selectedLastInsurance: { id: null, title: null },
};

const insurance = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.GET_INSURANCE_COMPANIES: {
            return {
                ...state,
                getInsuranceLoading: true,
            };
        }
        case actionTypes.GET_INSURANCE_COMPANIES_SUCCESS: {
            return {
                ...state,
                insuranceList: action.payload.data,
                getInsuranceLoading: false
            };
        }
        case actionTypes.GET_INSURANCE_COMPANIES_FAILURE: {
            return { ...state, getInsuranceLoading: false };
        }

        case actionTypes.SELECTED_LAST_INSURANCE: {
            return { ...state, selectedLastInsurance: { id: action.payload.id, title: action.payload.insTitle } };
        }

        default: {
            return state;
        }
    }
};

export default insurance;
