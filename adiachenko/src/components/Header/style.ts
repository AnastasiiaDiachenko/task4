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
  }

  input {
    width: 74%;
    min-height: 60px;
    background: rgba(79, 79, 79, 0.7);
    padding-left: 20px;
    border: 0;
    border-radius: 10px;
    font-size: 25px;
    color: #${variables.colors.MAIN};

    ::placeholder,
    ::-webkit-input-placeholder {
      color: #${variables.colors.MAIN};
    }
    :-ms-input-placeholder {
      color: #${variables.colors.MAIN};
    }
  }
`;

export default HeaderStyled;
