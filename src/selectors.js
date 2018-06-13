
export const getCategories = ({ categories }) => {
  return Object.keys(categories);
}

export const getCategoryGroups = ({ categories }, id) => {
  let category = categories[id];
  let groups = category.groups.map(({ id, title }) => {
    return { id, title }
  });

  return groups;
}

export const fetchPreview = ({ categories }, id, groupId) => {
  let category = categories[id];
  let selectedGroup = category.groups.find((group) => {
    return group.id === groupId;
  });

  return selectedGroup ? selectedGroup.tags : [];
}

export const getCategoryTitle = ({ categories }, id) => {
  return categories[id].title;
}

export const getTags = ({ tags }) => {
  let output = '.\n'.repeat(5)  + tags.reduce((result, { text }) => {
    return result + `#${text} `;
  }, '');

  return output;
}

export const isAdded = ({ addedCategories }, id) => {
  return addedCategories[id]
}

export const getTotal = ({ tags }) => {
  return tags.length;
}

export const isCopied = ({copied}) => {
  return copied;
}

export const isTooLong = ({ tags }) => {
  return tags.length > 30;
}
