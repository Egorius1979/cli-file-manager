export const getPath = (str) => {
  const command = str.split(' ')[0];

  const newString = str.slice(str.indexOf(' ') + 1);
  const pathArr = newString.startsWith('"')
    ? newString.split('" ')
    : newString.split(' "');

  return pathArr.reduce(
    (acc, rec) => {
      if (rec.startsWith('"')) {
        rec = rec.slice(1);
      }
      if (rec.endsWith('"')) {
        rec = rec.slice(0, rec.length - 1);
      }
      return [...acc, rec.trim()];
    },
    [command]
  );
};
