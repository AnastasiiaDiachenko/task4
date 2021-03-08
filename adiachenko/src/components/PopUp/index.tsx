import React from "react";
import styled from "styled-components";
import { variables } from "../../helpers/styleVariables";

const PopUpWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  
  .content {
    display: flex;
    flex-direction: column;
    max-width: 650px;
    padding: 20px 50px;
    margin: 70px auto 0 auto;
    background: #${variables.background.MAIN};
    max-height: 80vh;
    overflow-y: auto;
  }

  .close {
    background: #${variables.background.MAIN};
    height: 40px;
    width: 40px;
    align-self: flex-end;
    color: white;
    font-size: 30px;
  }
`;

const PopUp = ({closeForm, children}: any) => {
    return (
        <PopUpWrapper>
            <div className="content">
                <button
                    className="close"
                    onClick={() => closeForm()}
                >
                    X
                </button>
                {children}
            </div>
        </PopUpWrapper>
    )
};

export {PopUp};