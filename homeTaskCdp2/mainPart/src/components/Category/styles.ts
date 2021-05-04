import styled from 'styled-components';
import { variables } from '../../helpers/styleVariables';

const CategoryUl = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;

  li {
    padding: 10px 20px 10px 0;

    &.active {
      border-bottom: 5px solid #${variables.background.BUTTON};
      margin-bottom: -5px;

      @media (max-width: 850px) {
        border: 0;
        color: #${variables.background.BUTTON};
      }
    }
    
    @media (max-width: 850px) {
      &:hover {
        background: #${variables.background.BUTTON};
        color: black;
      }
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export default CategoryUl;
