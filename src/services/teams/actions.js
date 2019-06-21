import actions from '../util/actions';

export const FETCH_TEAMS = actions('FETCH_TEAMS');

export const teamActions = {
  fetchTeams: () => ({ type: FETCH_TEAMS.REQUEST }),
};
