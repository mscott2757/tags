export const DELETE_TAG = 'DELETE_TAG';
export const ADD_TAG = 'ADD_TAG';
export const REORDER_TAG = 'REORDER_TAG';
export const ADD_GROUP = 'ADD_GROUP';
export const COPY_TAGS = 'COPY_TAGS';
export const RESET_COPIED = 'RESET_COPIED';
export const RESET_TAGS = 'RESET_TAGS';

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

export const resetTags = () => {
  return { type: RESET_TAGS }
}

export const addGroup = (id, groupId) => {
  return {
    type: ADD_GROUP,
    id,
    groupId
  }
}

export const copyTags = (copiedTimer) => {
  return {
    type: COPY_TAGS,
    copiedTimer
  }
}

export const resetCopied = () => {
  return { type: RESET_COPIED }
}
