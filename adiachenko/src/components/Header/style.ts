import styled from "styled-components";
import { variables } from "../../helpers/styleVariables";

const HeaderStyled = styled.header`
  position: relative;
  min-height: 400px;
  overflow: hidden;

  .img-wrapper {
    background: rgba(88, 102, 116, 0.72);
    max-height: 400px;
  }

  img {
    width: 100%;

    @media (max-width: 850px) {
      width: auto;
    }
  }
  
  .search-input {
    width: calc(100% - 20px);
    margin-right: 20px;
  }

  .position {
    position: absolute;
    top: 0;
    width: calc(100% - 80px);
    height: 100%;
    padding: 20px 40px 0 40px;
    background: rgba(0, 0, 0, 0.7);
  }

  .content-wrapper {
    max-width: 1440px;
    margin: 0 auto;
    color: white;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;

    @media (max-width: 850px) {
      flex-direction: column
    }
  }

  .title {
    padding: 0 40px;
    text-transform: uppercase;
    font-size: 60px;
    font-weight: 100;
  }

  .search-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;

    @media (max-width: 850px) {
      flex-direction: column;
      
      input {
        margin-bottom: 20px;
      }
    }
  }

  h1.title {
    @media (max-width: 850px) {
      font-size: 25px;
      padding: 40px;
    }
    @media (max-width: 450px) {
      padding: 10px;
    }
  }
`;

export default HeaderStyled;
