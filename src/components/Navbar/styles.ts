import styled from 'styled-components';

import { colors } from '../../styles';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 118px;
  display: flex;
  background-color: ${colors.blue};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  z-index: 999;

  .search-input {
    width: 50vw;
    margin: 0 16px;
    background-color: ${colors.white};
    border-radius: 4px;

    @media only screen and (max-width: 600px) {
      min-width: 70vw;
    }
  }
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

export { Container, Logo };
