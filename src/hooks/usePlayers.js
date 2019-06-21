/* eslint-disable camelcase */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { ENDPOINT_URLS } from 'services/constants';

const fetchPlayer = async team_id => {
  try {
    const res = await fetch(
      `${ENDPOINT_URLS.TEAMS}/${team_id}/players?${
        process.env.REACT_APP_API_KEY
      }`,
    );
    const data = await res.json();
    return {
      players: data,
      team_id,
    };
  } catch (e) {
    console.error(`useState ${e.message}`);
    return null;
  }
};

export default function usePlayers({ teamList, teamId }) {
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [teamListPlayers, setTeamListPlayers] = useState({});

  useEffect(() => {
    const fetchOne = async () => {
      const { players } = await fetchPlayer(teamId);
      setTeamPlayers(players);
    };
    if (teamId) {
      fetchOne();
    }
  }, [teamId]);
  useEffect(() => {
    const fetchList = async () => {
      const draftTeamListPlayers = await Promise.all(
        teamList.map(team => fetchPlayer(team.team_id)),
      );
      const playersObj = draftTeamListPlayers.reduce((acc, item) => {
        if (item) {
          const { team_id, players } = item;
          acc[team_id] = players;
        }
        return acc;
      }, {});
      setTeamListPlayers(playersObj);
    };
    if (teamList && teamList.length > 0) {
      fetchList();
    }
  }, [teamId, teamList]);

  return [
    {
      teamListPlayers,
      teamPlayers,
    },
  ];
}
