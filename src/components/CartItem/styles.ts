import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import { colors } from '../../styles';

const Container = styled.div`
  background-color: ${colors.white};
  margin-top: 16px;
  padding: 16px;
`;

const Name = styled(Typography).attrs({
  variant: 'caption',
  color: 'textSecondary',
})`
  text-align: center;
`;

const Image = styled.img`
  height: 150px;
  width: auto;
  object-fit: contain;
`;

export { Container, Image, Name };
