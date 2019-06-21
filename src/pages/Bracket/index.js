import React from 'react';
import { useTeams } from 'hooks';
import { Container, StyledBracket, BracketWindow } from './styles';

export default function Bracket() {
  const [{ bracket, teamListPlayers }] = useTeams();
  return (
    <Container>
      <BracketWindow>
        <StyledBracket players={teamListPlayers} data={bracket} />
      </BracketWindow>
    </Container>
  );
}
