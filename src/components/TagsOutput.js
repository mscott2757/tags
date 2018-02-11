import React from 'react';

const TagsOutput = ({ tags, total }) => {
  return (
    <div className='tags-output-container'>
      <p>{`Total tags: ${total}`}</p>
      <div className='tags-output'>
        {tags}
      </div>
    </div>
  );
}

export default TagsOutput;
