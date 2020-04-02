export const reformatDate = fullDate => {
  const date = new Date(fullDate);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleString('en-GB', options);
};

export const formatToSlug = fileName => {
  console.log('filename', fileName);
  return fileName
    .replace(/^.*[\\/]/, '')
    .split('.')
    .slice(0, -1)
    .join('.');
};

export const queryFromUrl = url => {
  const [, ...queryStrings] = url.split('?');
  const queryString = queryStrings.join('?');
  const query = {};

  for (const [key, value] of new URLSearchParams(
    queryString,
  ).entries()) {
    query[key] = value;
  }

  return query;
};
