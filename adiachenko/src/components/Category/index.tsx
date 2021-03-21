import React, { useMemo } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { variables } from '../../helpers/styleVariables';
import {useAppContext} from "../../helpers/context";

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

const categories = [
    {
        type: 'All'
    },
    {
        type: 'Documentary'
    },
    {
        type: 'Comedy'
    },
    {
        type: 'Crime'
    }
];

interface CategoryLiProps {
    type: string,
    category: string,
    setCategory: () => void
}

const CategoryLi = ({type, category,  setCategory}: CategoryLiProps) => {
    const isActive = useMemo(() => type.toLowerCase() === category.toLowerCase(), [type, category]);

    return (
        <li
            className={classNames({
                active: isActive
            })}
            onClick={() => setCategory()}
        >
            {type}
        </li>
)};

const Category = () => {
    const contextValue = useAppContext();

    return (
        <CategoryUl>
            {
                categories.map(category =>
                    <CategoryLi
                        key={category.type}
                        type={category.type}
                        category={contextValue.sortCategory}
                        setCategory={() => contextValue.setCategory(category.type)}
                    />)
            }
        </CategoryUl>
    );
}

export default Category;
