import { delay } from 'redux-saga';
export function* currentTestSaga() {
    while (true) {
        yield delay(1000);
        //console.info ('currentTestSaga loop');
    }
}