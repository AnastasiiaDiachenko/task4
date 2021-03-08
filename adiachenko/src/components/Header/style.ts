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
`;

export default HeaderStyled;
