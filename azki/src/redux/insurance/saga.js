import { call, takeEvery, all, fork, put } from "redux-saga/effects";
import { toast } from "react-toastify";



//**  action types
import * as actionTypes from "../actionTypes";

//** actions
import * as actions from '../insurance/actions'

//** services 
import { getInsuranceCompaniesAsync } from '../../services/insuranceServices'




// ** GET  car types 
function* getInsuranceCompanies() {
    try {
        const response = yield call(
            getInsuranceCompaniesAsync
        );
        const data = response.data;

        if (response.status === 200) {
            yield put(actions.getInsuranceCompaniesSuccess(data));
        } else {
            toast.error(response.data.message);
            yield put(actions.getInsuranceCompaniesFailure());
        }
    } catch (error) {
        console.log(error);
    }
}


// ******************watch*****************

// watch get car types
export function* watchGetInsuranceCompanies() {
    yield takeEvery(actionTypes.GET_INSURANCE_COMPANIES, getInsuranceCompanies);
}


// ** Fork
export default function* rootSaga() {
    yield all([
        fork(watchGetInsuranceCompanies),
    ]);
}
