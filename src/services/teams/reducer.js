import { FETCH_TEAMS } from './actions';

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export default function teamsReducer(state = initialState, action) {
  const { payload, type } = action;
  const ERROR = { ...state, error: payload, loading: false };
  const LOADING = { ...state, error: null, loading: true };
  switch (type) {
    case FETCH_TEAMS.ERROR:
      return ERROR;
    case FETCH_TEAMS.REQUEST:
      return LOADING;
    case FETCH_TEAMS.RESOLVE:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
}
