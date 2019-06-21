import { all, fork } from 'redux-saga/effects';
import teamsSaga from './teams/saga';

export default function* rootSaga() {
  yield all([fork(teamsSaga)]);
}
