import {
    all,
} from 'redux-saga/effects';
import helloSagas from "./helloSagas";

export default function* rootSagas() {
    yield all([
      helloSagas()
    ]);
}