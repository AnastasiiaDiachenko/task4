import styled from 'styled-components';
import { variables } from '../../helpers/styleVariables';

const Poster = styled.img`
  max-width: 200px;
`;

const PosterWrapper = styled.div`
  min-width: 200px;
  height: 300px;
  background-color: lightblue;
  margin-right: 15px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 25px;
  
  h2 {
    padding-right: 15px;
  }
  
  span {
    padding: 10px;
    border: 4px solid #${variables.colors.LOGO};
    border-radius: 50%;
    min-width: 35px;
    text-align: center;
  }
`;

const Duration = styled.div`
  font-size: 25px;
  color: #${variables.colors.LOGO};
  
  span {
    padding-right: 40px;
  }
`;

export {
  Duration,
  TitleWrapper,
  PosterWrapper,
  Poster
};
