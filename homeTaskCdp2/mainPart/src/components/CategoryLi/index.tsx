import React from 'react';
import classNames from 'classnames';

interface CategoryLiProps {
  type: string,
  category: string,
  setCategoryType: () => void
}

const CategoryLi = ({ type, category, setCategoryType }: CategoryLiProps) => {
  const isActive = (typeI:string, categoryI: string)
    : boolean => typeI.toLowerCase() === categoryI.toLowerCase();

  return (
    <li
      className={classNames({
        active: isActive(type, category)
      })}
      onClick={() => setCategoryType()}
    >
      {type}
    </li>
  );
};

export default CategoryLi;
