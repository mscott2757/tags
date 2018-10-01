export const formatTags = tags => {
  return '.\n'.repeat(5)  + tags.reduce((result, { text }) => {
    return result + `#${text} `;
  }, '');
}
