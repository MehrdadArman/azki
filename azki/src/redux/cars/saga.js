import { call, takeEvery, all, fork, put } from "redux-saga/effects";
import { toast } from "react-toastify";



//**  action types
import * as actionTypes from "../actionTypes";

//** actions
import * as actions from '../cars/actions'

//** services 
import { getCarTypesAsync } from '../../services/carServices'




// ** GET  car types 
function* getCarTypes() {
    try {
        const response = yield call(
            getCarTypesAsync
        );
        const data = response.data;

        if (response.status === 200) {
            yield put(actions.getCarTypeSuccess(data));
        } else {
            toast.error(response.data.message);
            yield put(actions.getCarTypeFailure());
        }
    } catch (error) {
        console.log(error);
    }
}


// ******************watch*****************

// watch get car types
export function* watchGetCarTypes() {
    yield takeEvery(actionTypes.GET_CAR_TYPES, getCarTypes);
}


// ** Fork
export default function* rootSaga() {
    yield all([
        fork(watchGetCarTypes),
    ]);
}
