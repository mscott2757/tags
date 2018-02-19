import React from 'react';

const TagCategoryPreview = ({ tags }) => {
  return (
    <ul className={'tag-category-preview ' + (tags.length === 0 ? 'tag-category-preview--empty' : '')}>
      {tags.map((tag, index) => {
        return (
          <li key={index}>
            {tag}
          </li>
        );
      })}

    </ul>
  )
}

export default TagCategoryPreview;
