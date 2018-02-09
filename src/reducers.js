import {
  ADD_TAG,
  DELETE_TAG,
  REORDER_TAG
} from './actions';

const initialState = {
  tags: [{ id: 1, text: "thailand" }, { id: 2, text: "india" }],
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
        tags: tags.filter((tag, i) => i !== action.i)
      }
    case REORDER_TAG:
      let { tag, currPos, newPos } = action;
      let newTags = tags.slice();
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);
      return {
        tags: newTags
      }
    default:
      return state;
  }
}

export default Tags;
