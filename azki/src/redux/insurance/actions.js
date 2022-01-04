import * as actionTypes from "../actionTypes";


// ** get insurance companies
export const getInsuranceCompanies = () => ({
    type: actionTypes.GET_INSURANCE_COMPANIES,
});

export const getInsuranceCompaniesSuccess = (data) => ({
    type: actionTypes.GET_INSURANCE_COMPANIES_SUCCESS,
    payload: {
        data,
    },
});

export const getInsuranceCompaniesFailure = () => ({
    type: actionTypes.GET_INSURANCE_COMPANIES_FAILURE,
});


export const setSelectedLastInsurance = (insTitle,id) => ({
    type: actionTypes.SELECTED_LAST_INSURANCE,
    payload: {
        insTitle,
        id
    },
});


