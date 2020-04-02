export const reformatDate = fullDate => {
  const date = new Date(fullDate);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleString('en-GB', options);
};

export const formatToSlug = fileName => {
  return fileName
    .replace(/^.*[\\/]/, '')
    .split('.')
    .slice(0, -1)
    .join('.');
};
