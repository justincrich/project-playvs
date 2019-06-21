import styled from 'styled-components';
import { SPACING_MEDIUM } from 'style/constants';
import PopOut from 'components/PopOut';
import Round from './Round';
import Game from './Game';

export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;
export const Column = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 0 ${SPACING_MEDIUM};
  height: 100%;
`;

export const Spacer = styled.div`
  flex-grow: 1;
  border-right: 1px solid ${props => props.theme.colors.border};
  &:first-of-type {
    border: 0px;
  }
  &:last-of-type {
    border: 0px;
  }
`;

export const StyledGame = styled(Game)``;
export const StyledRound = styled(Round)``;

export const RoundTitle = styled.span``;

export const MemberPopOut = styled(PopOut)``;
