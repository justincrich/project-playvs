import React from 'react';
import styled from 'styled-components';
import { KeyedListMapper } from 'core';
import { useClickBoundary } from 'hooks';
import PropTypes from 'prop-types';

import {
  SPACING_SMALL,
  SPACING_X_SMALL,
  OPACITY_PASSIVE,
} from 'style/constants';
import { TEXT_TITLE_SM } from 'style/mixins';
import Icon from 'components/Icon';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  z-index: 1000;
  background-color: #2a2a2a;
  border: 1px solid ${props => props.theme.colors.border};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  cursor: default;
`;

const TeamName = styled.div`
  ${TEXT_TITLE_SM}
  font-weight: bold;
  padding: ${SPACING_SMALL} 0;
  text-align: left;
  width: 100%;
`;

const MemberList = styled.div`
  font-size: 1.2rem;
  overflow: auto;
  width: 100%;
`;

const MemberContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  opacity: ${OPACITY_PASSIVE};
  && {
    stroke: white;
    width: 12px;
    height: 12px;
    margin-right: 2px;
  }
`;

const Stats = styled.div`
  display: flex;
  flex-flow: row;
  margin-left: auto;
`;

const StatFig = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: ${SPACING_X_SMALL};
`;

const Name = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`;

export default function PopOut(props) {
  const { className, onClose, teamMembers } = props;
  const ref = useClickBoundary(e => {
    e.stopPropagation();
    onClose();
  });

  return (
    <Container ref={ref} className={className}>
      <TeamName>Team Members:</TeamName>
      <MemberList>
        <KeyedListMapper list={teamMembers}>
          {(key, member) => (
            <MemberContainer key={key}>
              <StyledIcon name="user" />
              <Name>
                {member.name || 'unnamed'}{' '}
                {member.is_current_team_member && '(Retired)'}
              </Name>
              <Stats>
                <StatFig>
                  <StyledIcon name="game" />
                  {member.games_played}
                </StatFig>
                <StatFig>
                  <StyledIcon name="trophy" />
                  {member.wins}
                </StatFig>
              </Stats>
            </MemberContainer>
          )}
        </KeyedListMapper>
      </MemberList>
    </Container>
  );
}

PopOut.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  team: PropTypes.shape({}).isRequired,
  teamMembers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

PopOut.defaultProps = {
  className: undefined,
};
