import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import FilmsList from '../FilmsList';
import { variables } from '../../helpers/styleVariables';

const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const Main = styled.main`
  background: #${variables.background.MAIN};
  padding: 0 40px 20px 40px;
`;

const MainContent = () => (
  <Main>
    <ContentWrapper>
      <Menu />
      <FilmsList />
    </ContentWrapper>
  </Main>
);

export default MainContent;
