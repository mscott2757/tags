import React from 'react';
import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { formatTags } from './../helpers';
import { resetCopied, copyTags, resetTags } from './../actions';

const enhance = compose(
  connect(
    ({ tags, copied }) => ({ tags, copied }),
    dispatch => ({
      onCopy: () => {
        let timer = setTimeout(() => {
          dispatch(resetCopied());
        }, 3000);
        dispatch(copyTags(timer));
      },
      onReset: () => {
        dispatch(resetTags());
      },
    }),
  ),
  withProps(({ tags }) => ({
    total: tags.length,
    tooLong: tags.length > 30,
    tagsDisplay: formatTags(tags),
  })),
);

const Output = ({
  copied,
  tooLong,
  tagsDisplay,
  total,
  onCopy,
  onReset,
}) => {
  let copyConfirmation = copied ? <span className='alert-msg'>copied</span> : null;
  let tooLongWarning = tooLong ? <span className='alert-msg'>too many tags</span> : null;

  return (
    <div className='tags-output-container'>
      <p>{`Total tags: ${total}`}</p>
      <div className='tags-output__display'>
        {tagsDisplay}
      </div>
      <div className='tags-output__copy'>
        {tooLongWarning}
        {copyConfirmation}
        <CopyToClipboard
          text={tagsDisplay}
          onCopy={onCopy}
        >
          <button className={'tag-btn ' + (tooLong ? 'tag-btn--disabled' : '')}>Copy</button>
        </CopyToClipboard>
        <button onClick={onReset} className={'tag-btn'}>Reset</button>
      </div>
    </div>
  );
}

export const TagsOutput = enhance(Output);
