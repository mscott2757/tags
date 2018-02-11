import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const TagsOutput = ({ tags, total }) => {
  return (
    <div className='tags-output-container'>
      <p>{`Total tags: ${total}`}</p>
      <div className='tags-output'>
        {tags}
      </div>
      <CopyToClipboard text={tags}>
        <button>Copy</button>
      </CopyToClipboard>
    </div>
  );
}

export default TagsOutput;
