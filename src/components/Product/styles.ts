import { Typography } from '@material-ui/core';
import styled from 'styled-components';

import { colors } from '../../styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  min-height: 300px;
  padding: 16px;
  background-color: ${colors.white};
  border-radius: 4px;
  &:hover {
    -webkit-box-shadow: 3px 2px 9px -1px rgba(204, 204, 204, 0.67);
    box-shadow: 3px 2px 9px -1px rgba(204, 204, 204, 0.67);
  }
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  position: relative;
  z-index: 10;
`;

const Image = styled.img`
  height: 150px;
  width: auto;
  object-fit: contain;
  margin: 16px 0;
`;

const Name = styled(Typography).attrs({
  variant: 'caption',
  color: 'textSecondary',
})`
  text-align: center;
`;

const StoreName = styled(Typography).attrs({
  variant: 'caption',
  color: 'secondary',
})`
  text-align: center;
  color: ${colors.blue};
  font-weight: bold;
  padding-right: 16px;
`;

const StoreContainer = styled.div`
  flex: 1;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;

const Price = styled.span<{ hovered: boolean }>`
  text-align: center;
  font-weight: bold;
  margin-top: 8px;
  opacity: 1;
  transition: opacity 0.2s linear;
  ${({ hovered }) => (hovered ? 'opacity: 0;' : '')}
`;

const ActionsContainer = styled.div<{ hovered: boolean }>`
  display: flex;
  background-color: ${colors.white};
  align-content: center;
  justify-content: center;
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translate(-50%, 0);
  transition: opacity 0.2s linear;
  width: 100%;
  opacity: 0;
  ${({ hovered }) => (hovered ? 'opacity: 1;' : '')}
`;

export {
  Container,
  Image,
  Name,
  Price,
  StoreContainer,
  TitleContainer,
  StoreName,
  ActionsContainer,
};
