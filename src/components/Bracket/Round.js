import React from 'react';
import PropTypes from 'prop-types';
import { KeyedListMapper } from 'core';
import { StyledGame, Column } from './styles';

export default function Round(props) {
  const { games, className, round, players } = props;

  return (
    <Column className={className}>
      <KeyedListMapper list={games}>
        {(key, game) => (
          <StyledGame key={key} game={game} round={round} players={players} />
        )}
      </KeyedListMapper>
    </Column>
  );
}

Round.propTypes = {
  className: PropTypes.string,
  games: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))).isRequired,
  players: PropTypes.shape({}).isRequired,
  round: PropTypes.number.isRequired,
};

Round.defaultProps = {
  className: undefined,
};
