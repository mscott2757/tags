export const getCategoryGroups = (state, id) => {
  let category = state.tagCategories[id];
  let groups = category.groups.map(({ id, title }) => {
    return { id, title }
  });

  return groups;
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

export const getTotal = ({ tags }) => {
  return tags.length;
}
