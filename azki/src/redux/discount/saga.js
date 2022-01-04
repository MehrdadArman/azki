import { call, takeEvery, all, fork, put } from "redux-saga/effects";
import { toast } from "react-toastify";



//**  action types
import * as actionTypes from "../actionTypes";

//** actions
import * as actions from '../discount/actions'

//** services 
import { getDriverDiscountAsync, getThirdDiscountAsync } from '../../services/discountServices'




// ** GET  third discount 
function* getThirdDiscount() {
    try {
        const response = yield call(
            getThirdDiscountAsync
        );
        const data = response.data;

        if (response.status === 200) {
            yield put(actions.getThirdDiscountSuccess(data));
        } else {
            toast.error(response.data.message);
            yield put(actions.getThirdDiscountFailure());
        }
    } catch (error) {
        console.log(error);
    }
}


function* getDriverDiscount() {
    try {
        const response = yield call(
            getDriverDiscountAsync
        );
        const data = response.data;

        if (response.status === 200) {
            yield put(actions.getDriverDiscountSuccess(data));
        } else {
            toast.error(response.data.message);
            yield put(actions.getDriverDiscountFailure());
        }
    } catch (error) {
        console.log(error);
    }
}

// ******************watch*****************

// watch get car types
export function* watchGetThirdDiscount() {
    yield takeEvery(actionTypes.GET_THIRD_DISCOUNT, getThirdDiscount);
}

export function* watchGetDriverDiscount() {
    yield takeEvery(actionTypes.GET_DRIVER_DISCOUNT, getDriverDiscount);
}


// ** Fork
export default function* rootSaga() {
    yield all([
        fork(watchGetThirdDiscount),
        fork(watchGetDriverDiscount),
    ]);
}
