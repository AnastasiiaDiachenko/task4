import styled from 'styled-components';

const FilmsStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
  
  li {
    padding: 2rem;
  }
`;

const FoundCountStyled = styled.div`
  font-size: 20px;
  color: white;
  padding: 10px 0;
`;

const NoFound = styled.p`
  font-size: 35px;
  color: white;
  text-align: center;
`;

export { FilmsStyled, FoundCountStyled, NoFound };
