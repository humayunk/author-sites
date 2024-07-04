// src/utils/utils.js

export const createSlug = (str) => {
  return str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};
