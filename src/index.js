module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length;)
  if (!str.includes(bracketsConfig[i].join(''))) {
      i++;
  } else {
      str = str.replace(bracketsConfig[i].join(''), '');
      i = 0;
  }
if (str.length === 0) {
  return true;
} else {
  return false;
}
}
