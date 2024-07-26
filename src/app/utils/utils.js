// src/utils/utils.js

export const createSlug = (str) => {
  if (!str) return '';
  return str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};
