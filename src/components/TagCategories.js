import React from 'react';
import { TagCategoryContainer } from '../containers';

export const TagCategories = ({ categories }) => (
  <div className='tag-categories'>
    {categories.map((category) => <TagCategoryContainer id={category} key={category} /> )}
  </div>
);
