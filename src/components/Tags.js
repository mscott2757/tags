import { compose, withProps } from 'recompose';
import { WithContext as ReactTags } from 'react-tag-input';
import { connect } from 'react-redux';
import {
  deleteTag,
  addTag,
  reorderTag
} from '../actions';

export const Tags = compose(
  withProps(() => ({ autofocus: false })),
  connect(
    ({ tags }) => ({ tags }),
    dispatch => ({
      handleDelete: i => {
        dispatch(deleteTag(i));
      },
      handleAddition: text => {
        dispatch(addTag({ text }));
      },
      handleDrag: (tag, currPos, newPos) => {
        dispatch(reorderTag(tag, currPos, newPos));
      }
    }),
  ),
)(ReactTags);
