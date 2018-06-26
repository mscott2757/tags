
export const getCategories = ({ categories }) => Object.keys(categories);

export const getCategoryGroups = ({ categories }, id) => {
  let category = categories[id];
  return Object.keys(category.groups).map((id) => {
    return { ...category.groups[id], id }
  });
}

export const fetchPreview = ({ categories }, id, groupId) => {
  let category = categories[id];
  let selectedGroup = category.groups[groupId];
  return selectedGroup ? selectedGroup.tags : [];
}

export const getCategoryTitle = ({ categories }, id) => categories[id].title;

export const getTags = ({ tags }) => {
  return '.\n'.repeat(5)  + tags.reduce((result, { text }) => {
    return result + `#${text} `;
  }, '');
}

export const isAdded = ({ addedCategories }, id) => addedCategories[id];

export const getTotal = ({ tags }) => tags.length;

export const isCopied = ({ copied }) => copied;

export const isTooLong = ({ tags }) => tags.length > 30;
