import styled from 'styled-components';
import { PAGE_BODY } from 'style/mixins';
import Bracket from 'components/Bracket';

export const Container = styled.div`
  ${PAGE_BODY}
  justify-content: center;
  align-items: center;
`;
export const BracketWindow = styled.div`
  width: 90%;
  border: 2px solid ${props => props.theme.colors.border};
  overflow: auto;
  margin: 10px;
`;
export const StyledBracket = styled(Bracket)``;
