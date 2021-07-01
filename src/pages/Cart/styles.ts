import styled from 'styled-components';
import { Box } from '@material-ui/core';

import { colors } from '../../styles';

const Container = styled(Box)`
  min-height: 100vh;
  padding-top: 16px;
`;

const TotalContainer = styled.div`
  background-color: ${colors.white};
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;

export { Container, TotalContainer };
