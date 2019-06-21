import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { KeyedListMapper } from 'core';
import { StyledRound, Row, Column, RoundTitle } from './styles';

const Container = styled(Row)`
  padding: 10px;
  height: ${props => props.rounds * 300}px;
`;

const RoundContainer = styled(Column)`
  padding: 0px;
  align-items: center;
`;
export default function Bracket(props) {
  const { data, className, players } = props;

  return (
    <Container className={className} rounds={data.length}>
      <KeyedListMapper list={data}>
        {(key, games, idx) => (
          <RoundContainer round={idx + 1}>
            <RoundTitle>
              {idx === data.length - 1 ? 'Championchip' : `Round ${idx + 1}`}
            </RoundTitle>
            <StyledRound
              key={key}
              games={games}
              round={idx + 1}
              players={players}
            />
          </RoundContainer>
        )}
      </KeyedListMapper>
    </Container>
  );
}

Bracket.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))).isRequired,
  players: PropTypes.shape({}).isRequired,
};

Bracket.defaultProps = {
  className: undefined,
};
