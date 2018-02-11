export const DELETE_TAG = 'DELETE_TAG';
export const ADD_TAG = 'ADD_TAG';
export const REORDER_TAG = 'REORDER_TAG';
export const ADD_GROUP = 'ADD_GROUP';

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

export const addGroup = (id, groupId) => {
  return {
    type: ADD_GROUP,
    id,
    groupId
  }
}
