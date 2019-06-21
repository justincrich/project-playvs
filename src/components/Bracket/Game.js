import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { KeyedListMapper } from 'core';
import { TEXT_SUB, TEXT_TITLE_SM } from 'style/mixins';
import { SPACING_MEDIUM_PX, SPACING_SMALL } from 'style/constants';
import MemberPopOut from 'components/MemberPopOut';
import { Row, Spacer } from './styles';

const TEAM_HEIGHT_PX = 50;
const GameContainer = styled.div`
  display: flex;
  flex-flow: column;

  position: relative;
`;

const TeamContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-flow: row;
  height: ${TEAM_HEIGHT_PX}px;
  width: 280px;
  background-color: #2a2a2a;
  border-top: 1px solid
    ${props =>
      props.isWinner ? props.theme.colors.accent : props.theme.colors.border};
  border-left: 3px solid
    ${props =>
      props.isWinner ? props.theme.colors.accent : props.theme.colors.border};
`;

const Image = styled.img`
  height: 100%;
  width: 50px;
  object-fit: contain;
`;

const Seed = styled.span`
  ${TEXT_SUB}
  padding: 0 ${SPACING_SMALL};
`;

const Title = styled.span`
  ${TEXT_TITLE_SM}
  ${props =>
    props.isWinner &&
    `color: ${props.theme.colors.accent};`}
  font-weight: bold;
  max-width: 125px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 0 10px;
  text-transform: uppercase;
`;

const Score = styled.span`
  ${TEXT_TITLE_SM}
  margin-left: auto;
  font-weight: bold;
  padding: 0 ${SPACING_SMALL};
  ${props =>
    props.isWinner &&
    `
    color: ${props.theme.colors.accent};
  `}
`;

const GAP_WIDTH = `${SPACING_MEDIUM_PX * 2}px`;
const PrevPointer = styled.div`
  width: ${GAP_WIDTH};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  position: absolute;
  top: 50%;
  transform: translate(-${GAP_WIDTH}, -50%);
`;

const StyledMemberPopOut = styled(MemberPopOut)`
  top: ${TEAM_HEIGHT_PX}px;
  left: 0;
`;

export default function Game(props) {
  const { className, game, players, round } = props;
  const winnerId = useMemo(() => {
    return game.sort((a, b) => b.score - a.score).slice(0, 1)[0].team_id;
  }, [game]);
  const [activeTeamId, setActiveTeamId] = useState(null);
  return (
    <>
      <Spacer />
      <Row className={className}>
        <GameContainer round={round}>
          {round !== 1 && <PrevPointer />}
          <KeyedListMapper list={game}>
            {(key, team) => (
              <TeamContainer
                key={key}
                isWinner={team.team_id === winnerId}
                onClick={() => setActiveTeamId(team.team_id)}
              >
                <Seed>{team.seed}</Seed>
                <Image src={team.logo_url} />
                <Title isWinner={team.team_id === winnerId}>
                  {team.name || 'unknown'}
                </Title>
                <Score isWinner={team.team_id === winnerId}>{team.score}</Score>
                {activeTeamId && activeTeamId === team.team_id && (
                  <StyledMemberPopOut
                    team={team}
                    teamMembers={players[activeTeamId]}
                    onClose={() => setActiveTeamId(null)}
                  />
                )}
              </TeamContainer>
            )}
          </KeyedListMapper>
        </GameContainer>
      </Row>
      <Spacer />
    </>
  );
}

Game.propTypes = {
  className: PropTypes.string,
  game: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  players: PropTypes.shape({}).isRequired,
  round: PropTypes.number.isRequired,
};
Game.defaultProps = {
  className: undefined,
};
