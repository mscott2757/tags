import {
  ADD_TAG,
  DELETE_TAG,
  REORDER_TAG,
  ADD_GROUP
} from './actions';

import {
  defaultTags,
  cameras,
  films
} from './content/Content';

const initialState = {
  tags: defaultTags.map((text, index) => {
    return {
      id: index + 1,
      text
    }
  }),
  tagCategories: {
    cameras: cameras,
    films: films
  }
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
      console.log(category);
      console.log(groupId);
      let selectedGroup = category.options.find((group) => {
        return group.id === groupId;
      });
      console.log(selectedGroup);

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
        ]
      }
    default:
      return state;
  }
}

export default Tags;
