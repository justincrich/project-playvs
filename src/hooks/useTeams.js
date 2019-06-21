/* eslint-disable camelcase */
/* eslint-disable no-plusplus */

import { useEffect, useState } from 'react';
import { useSelector, usePlayers } from 'hooks';
import { getTeams } from 'services/teams';

const TEAMS = 16;
const ROUNDS = 4;

// Function that generates bracket data and results
const generateBracket = allTeams => {
  // chooses between two competitors at random
  const chooseWinner = teams => {
    const winnerIdx = Math.round(Math.random());
    const looserIdx = Math.abs(winnerIdx - 1);
    teams[winnerIdx].score = Math.floor(Math.random() * 10) + 11;
    teams[looserIdx].score = Math.floor(Math.random() * 10) + 1;
    return teams[winnerIdx];
  };
  // gets top teams
  const teams = allTeams
    .sort((a, b) => a.rating > b.rating)
    .map((item, idx) => {
      item.seed = idx + 1;
      return item;
    })
    .slice(0, TEAMS);

  // Seed teams into initial games
  const gameCount = teams.length / 2;
  const firstRound = [];
  for (let j = 0; j < gameCount; j++) {
    const front = teams[j];
    const back = teams[teams.length - (j + 1)];
    const game = [front, back];
    firstRound.push(game);
  }
  const draftBrackets = [firstRound];
  for (let i = 1; i < ROUNDS; i++) {
    // choose last round winners
    const prevRound = draftBrackets[i - 1];
    const nextRounds = [];
    for (let j = 0; j < prevRound.length; j += 2) {
      // take winner and push them on for next round
      const winner1 = chooseWinner(prevRound[j]);
      const winner2 = chooseWinner(prevRound[j + 1]);
      const player1 = { ...winner1 };
      delete player1.score;
      const player2 = { ...winner2 };
      delete player2.score;
      const nextGame = [player1, player2];
      if (i === ROUNDS - 1) {
        // get score for final game
        chooseWinner(nextGame);
      }
      nextRounds.push(nextGame);
    }
    draftBrackets.push(nextRounds);
  }

  return { draftBrackets, draftCompetitors: teams };
};

export default function useTeams() {
  const allTeams = useSelector(getTeams);
  const [bracket, setBracket] = useState([]);
  const [competitors, setCompetitors] = useState([]);
  const [{ teamListPlayers }] = usePlayers({ teamList: competitors });
  useEffect(() => {
    if (allTeams.length > 0) {
      // NOTE: For the demo purpose we are generating a bracket
      const { draftBrackets, draftCompetitors } = generateBracket(allTeams);
      setBracket(draftBrackets);
      setCompetitors(draftCompetitors);
    }
  }, [allTeams]);

  return [{ allTeams, bracket, competitors, teamListPlayers }, {}];
}
