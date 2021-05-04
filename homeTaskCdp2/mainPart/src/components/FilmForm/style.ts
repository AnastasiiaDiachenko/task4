import styled from 'styled-components';
import { variables } from '../../helpers/styleVariables';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  
  label {
    display: flex;
    flex-direction: column;
    padding: 15px 0;
  };
  
  select {
    width: 100%;
  }
  
  input {
    width: calc(100% - 20px);
  }
  
  span {
    color: #${variables.background.BUTTON};
    text-transform: uppercase;
    padding-bottom: 10px;
  };
  
  .buttons {
    padding-top: 70px;
    display: flex;
    justify-content: flex-end;
  }
  
  .reset {
    margin-right: 50px;
  }
`;

const customStyles = {
  valueContainer: (provided: any) => ({
    ...provided,
    height: '40px',
    background: 'rgba(79,79,79,0.7)',
    borderRadius: '15px 0 0 15px'
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    background: 'rgba(79,79,79,0.7)'
  }),
  menu: (provided: any) => ({
    ...provided,
    background: 'rgb(79,79,79)',
    color: 'white',
    fontSize: '15px'
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: 'white'
  }),
  control: (provided: any) => ({
    ...provided,
    background: 'transparent',
    border: 0
  })
};

export { FormWrapper, customStyles };
