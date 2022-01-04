import { all, fork } from "redux-saga/effects";
// import authSagas from "./auth/saga";
import carsSagas from './cars/saga'
import insuranceSagas from './insurance/saga'
import discountSagas from './discount/saga'

export default function* rootSaga() {
  yield all([
    // fork(authSagas),
    fork(carsSagas),
    fork(insuranceSagas),
    fork(discountSagas),
  ]);
}
