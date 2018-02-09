export const DELETE_TAG = 'DELETE_TAG';
export const ADD_TAG = 'ADD_TAG';
export const REORDER_TAG = 'REORDER_TAG';

export const deleteTag = i => {
  return {
    type: DELETE_TAG,
    i
  }
}

export const addTag = text => {
  return {
    type: ADD_TAG,
    text: text.replace(/ /g, '').toLowerCase()
  }
}

export const reorderTag = (tag, currPos, newPos) => {
  return {
    type: REORDER_TAG,
    tag,
    currPos,
    newPos
  }
}

export const formatTags = (tags) => {
  let output = '.\n'.repeat(5)  + tags.reduce((result, { text }) => {
    return result + `#${text}`;
  }, '');

  return output;
}
