import React from 'react';
import CategoryUl from './styles';
import CategoryLi from '../CategoryLi';
import { Categories } from '../../constants';

const categories = [
  Categories.All,
  Categories.Documentary,
  Categories.Comedy,
  Categories.Crime
].map((type) => ({ type }));

interface CategoryProps {
  category: string,
  // eslint-disable-next-line no-unused-vars
  setCategory: (type: string) => void
}

const Category = ({ category, setCategory }: CategoryProps) => (
  <CategoryUl>
    {
      categories.map(({ type }) => (
        <CategoryLi
          key={type}
          type={type}
          category={category}
          setCategoryType={() => setCategory(type)}
        />
      ))
    }
  </CategoryUl>
);

export default Category;
