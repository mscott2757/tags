export const getCategoryOptions = (state, id) => {
  let category = state.tagCategories[id];
  let options = category.options.map(({ id, title }) => {
    return { id, title }
  });

  return options;
}

export const getCategoryTitle = (state, id) => {
  return state.tagCategories[id].title;
}

export const getTags = ({ tags }) => {
  let output = '.\n'.repeat(5)  + tags.reduce((result, { text }) => {
    return result + `#${text}`;
  }, '');

  return output;
}
