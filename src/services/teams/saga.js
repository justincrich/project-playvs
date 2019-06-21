import { takeEvery, all, put } from 'redux-saga/effects';
import axios from 'axios';
import { ENDPOINT_URLS } from 'services/constants';

import { FETCH_TEAMS, teamActions } from './actions';

function* fetchTeamsSaga() {
  try {
    const { data } = yield axios.get(
      `${ENDPOINT_URLS.TEAMS}?api_key=${process.env.REACT_APP_API_KEY}`,
    );

    if (data.length > 0) {
      yield put({
        payload: data,
        type: FETCH_TEAMS.RESOLVE,
      });
    } else {
      throw new Error('No Data Returned');
    }
  } catch (e) {
    put({ payload: e.message, type: FETCH_TEAMS.ERROR });
  }
}

export default function* teamsSaga() {
  yield all([takeEvery(FETCH_TEAMS.REQUEST, fetchTeamsSaga)]);
  yield put(teamActions.fetchTeams());
}
