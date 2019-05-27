export const DELETE_TAG = 'DELETE_TAG';
export const ADD_TAG = 'ADD_TAG';
export const REORDER_TAG = 'REORDER_TAG';
export const COPY_TAGS = 'COPY_TAGS';
export const RESET_COPIED = 'RESET_COPIED';
export const RESET_TAGS = 'RESET_TAGS';
export const ADD_TAGS = 'ADD_TAGS';
export const CLEAR_SUCCESS = 'CLEAR_SUCCESS';

export const deleteTag = i => ({ type: DELETE_TAG, i });

export const insertTag = ({ text, showSuccess }) => ({
  type: ADD_TAG,
  text: text.replace(/ /g, '').toLowerCase(),
  showSuccess,
});

export const clearSuccess = () => ({
  type: CLEAR_SUCCESS,
});

export const reorderTag = (tag, currPos, newPos) => ({
  type: REORDER_TAG,
  tag,
  currPos,
  newPos
});

export const insertTags = ({ tags, showSuccess }) => ({
  type: ADD_TAGS,
  showSuccess,
  tags,
});

const delay = duration => new Promise(resolve => {
  setTimeout(resolve, duration);
});

const actionWithSuccess = action => data => async dispatch => {
  dispatch(action({ ...data, showSuccess: true }));
  await delay(1200);
  dispatch(clearSuccess());
}

export const addTag = actionWithSuccess(insertTag);
export const addTags = actionWithSuccess(insertTags);

export const resetTags = () => ({ type: RESET_TAGS });

export const copyTags = copiedTimer => ({ type: COPY_TAGS, copiedTimer });

export const resetCopied = () => ({ type: RESET_COPIED });
