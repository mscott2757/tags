import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const TagsOutput = ({ copied, tooLong, tags, total, onCopy }) => {
  let copyConfirmation = copied ? <span className='alert-msg'>copied</span> : null;
  let tooLongWarning = tooLong ? <span className='alert-msg'>too many tags</span> : null;

  return (
    <div className='tags-output-container'>
      <p>{`Total tags: ${total}`}</p>
      <div className='tags-output__display'>
        {tags}
      </div>
      <div className='tags-output__copy'>
        {tooLongWarning}
        {copyConfirmation}
        <CopyToClipboard
          text={tags}
          onCopy={onCopy}
        >
          <button className={'tag-btn ' + (tooLong ? 'tag-btn--disabled' : '')}>Copy</button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default TagsOutput;
