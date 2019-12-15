import {
    put,
    call,
    takeLatest,
    all,
    fork,
} from "redux-saga/effects";

import {
    REQUEST_FETCH
} from '../actions/hello/helloActionTypes';
import {
    reqFetchSuccess,
    reqFetchFail
} from '../actions/hello/helloActionCreators';

import {apiService} from '../../services/api';

// *********************************************************
// REQUEST FETCH BY ID
// *********************************************************
function* reqFetch() {
    try {
        const { data } = yield call(() => apiService.helloApi.getJson());
        yield put(reqFetchSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(reqFetchFail(error))
    }
}
function* watchReqFetch() {
    yield takeLatest(REQUEST_FETCH, reqFetch);
}

export default function* () {
    yield all([
        fork(watchReqFetch),
    ])
}