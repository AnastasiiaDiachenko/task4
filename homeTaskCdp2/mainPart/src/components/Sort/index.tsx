import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { variables } from '../../helpers/styleVariables';
import { SelectOptionTypes } from '../../types/types';
import { SortBy } from '../../constants';

const SortBlock = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 850px) {
    justify-content: center;
  }
`;

const SortLadel = styled.span`
  padding-right: 20px;
  color: #${variables.colors.SECONDARY};
`;

interface SortProps {
  // eslint-disable-next-line no-unused-vars
  setSortBy: (type: string) => void,
  sortBy: string
}

const options = [
  { value: SortBy.release, label: 'release date' },
  { value: SortBy.rating, label: 'rating' }
];

const customStyles = {
  container: (provided: any) => ({
    ...provided,
    minWidth: '250px'
  }),
  control: (provided: any) => ({
    ...provided,
    background: `#${variables.colors.LOGO}`
  }),
  menu: (provided: any) => ({
    ...provided,
    background: `#${variables.colors.LOGO}`,
    color: `#${variables.colors.SECONDARY}`
  })
};

const Sort = ({ sortBy, setSortBy }: SortProps) => {
  const valueProp = options.filter((option) => option.value === sortBy);

  return (
    <SortBlock>
      <SortLadel>
        SORT BY
      </SortLadel>

      <Select
        value={valueProp}
        options={options}
        styles={customStyles}
        onChange={(selected: SelectOptionTypes) => {
          setSortBy(selected.value);
        }}
      />
    </SortBlock>
  );
};

export default Sort;
