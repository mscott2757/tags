import {
  ADD_TAG,
  DELETE_TAG,
  REORDER_TAG,
  ADD_GROUP,
  COPY_TAGS,
  RESET_COPIED,
  RESET_TAGS
} from './actions';

import {
  defaultTags,
  tagCategories,
} from './content/Content';

const initialState = {
  tags: defaultTags.map((text, index) => {
    return {
      id: index + 1,
      text
    }
  }),
  tagCategories,
  addedCategories: Object.keys(tagCategories).reduce((acc, category) => {
    acc[category] = false;
    console.log(acc);
    return acc;
  }, {}),
  copied: false,
  copiedTimer: null
}

const Tags = (state = initialState, action) => {
  let { tags } = state;
  switch (action.type) {
    case ADD_TAG:
      let { text } = action;
      if (!text) {
        return state;
      }
      return {
        ...state,
        tags: [
          ...tags,
          {
            id: tags.length + 1,
            text
          }
        ]
      }
    case DELETE_TAG:
      return {
        ...state,
        tags: tags.filter((tag, i) => i !== action.i)
      }
    case RESET_TAGS:
      return {
        ...state,
        tags: defaultTags
      }
    case REORDER_TAG:
      let { tag, currPos, newPos } = action;
      let newTags = tags.slice();
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);
      return {
        ...state,
        tags: newTags
      }
    case ADD_GROUP:
      let { id, groupId } = action;
      let category = state.tagCategories[id];
      let selectedGroup = category.groups.find((group) => {
        return group.id === groupId;
      });

      return {
        ...state,
        tags: [
          ...tags,
          ...selectedGroup.tags.map(( text, index) => {
            return {
              id: tags.length + 1 + index,
              text
            }
          })
        ],
        addedCategories: {
          ...state.addedCategories,
          [id]: true
        }
      }
    case COPY_TAGS:
      clearTimeout(state.copiedTimer);
      return {
        ...state,
        copied: true,
        copiedTimer: action.copiedTimer
      }
    case RESET_COPIED:
      return { ...state, copied: false }
    default:
      return state;
  }
}

export default Tags;
