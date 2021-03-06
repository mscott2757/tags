import React from 'react';
import styled from 'styled-components';
import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from './Core';
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

const TagButton = styled(Button)`
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;

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
          <TagButton disabled={tooLong}>Copy</TagButton>
        </CopyToClipboard>
        <TagButton onClick={onReset} className={'tag-btn'}>Reset</TagButton>
      </div>
    </div>
  );
}

export const TagsOutput = enhance(Output);
