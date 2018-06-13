import React from 'react';
import { TagCategoryContainer } from '../containers';

const TagCategories = ({ categories }) => {
  return (
    <div className='tag-categories'>
      {categories.map((category) => <TagCategoryContainer id={category} key={category} /> )}
    </div>
  );
}

export default TagCategories;
