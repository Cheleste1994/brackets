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


const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
let check = '([{}])';

for (let i = 0; i < config3.length;)
  if (!check.includes(config3[i].join(''))) {
      i++;
      console.log(check)
  } else {
      check = check.replace(config3[i].join(''), '');
      i = 0;
  }

console.log(check)
