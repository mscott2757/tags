import {
  ADD_TAG,
  DELETE_TAG,
  REORDER_TAG,
  ADD_GROUP,
  COPY_TAGS,
  RESET_COPIED,
  RESET_TAGS,
  ADD_TAGS,
} from './actions';

import {
  defaultTags,
  categories,
  flatGroups,
} from './content/';

const getInitialState = () => ({
  tags: defaultTags.map((text, index) => ({ id: index + 1, text })),
  categories,
  addedCategories: Object.keys(categories).reduce((acc, category) => {
    acc[category] = false;
    return acc;
  }, {}),
  copied: false,
  copiedTimer: null,
  groups: Object.keys(flatGroups).map(id => ({ id, ...flatGroups[id] })),
});

const TagsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TAG:
      let { text } = action;
      if (!text)
        return state;
      return [ ...state, { id: state.length + 1, text } ];
    case DELETE_TAG:
      return state.filter((tag, i) => i !== action.i);
    case REORDER_TAG:
      let { tag, currPos, newPos } = action;
      let newTags = state.slice();
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);
      return newTags;
    default:
      return state;
  }
}

const RootReducer = (state = getInitialState(), action) => {
  let { tags } = state;
  switch (action.type) {
    case ADD_TAG:
      return { ...state, tags: TagsReducer(tags, action) }
    case DELETE_TAG:
      return { ...state, tags: TagsReducer(tags, action) }
    case RESET_TAGS:
      return getInitialState();
    case REORDER_TAG:
      return { ...state, tags: TagsReducer(tags, action) }
    case ADD_GROUP:
      let { id, groupId } = action;
      let category = state.categories[id];
      let selectedGroup = category.groups[groupId]
      return {
        ...state,
        tags: [
          ...tags,
          ...selectedGroup.tags.map((text, index) => {
            return { id: tags.length + 1 + index, text }
          })
        ],
        addedCategories: {
          ...state.addedCategories,
          [id]: true,
        }
      }
    case ADD_TAGS:
      return {
        ...state,
        tags: [
          ...tags,
          ...action.tags.map((text, index) => {
            return { id: tags.length + 1 + index, text }
          }),
        ],
      };
    case COPY_TAGS:
      clearTimeout(state.copiedTimer);
      return {
        ...state,
        copied: true,
        copiedTimer: action.copiedTimer,
      }
    case RESET_COPIED:
      return { ...state, copied: false }
    default:
      return state;
  }
}

export default RootReducer;
