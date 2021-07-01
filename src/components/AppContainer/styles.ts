import styled from 'styled-components';
import { Box } from '@material-ui/core';

import { colors } from '../../styles';

const Container = styled(Box)`
  padding: 0 15vw;
  margin: 0;
  min-height: calc(100vh - 118px);
  border-radius: 0;
  margin-top: 118px;
  background-color: ${colors.light};
`;

export { Container };
