module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < bracketsConfig.length; k++) {
      if (arr[i] == bracketsConfig[k][1] && arr[i - 1] == bracketsConfig[k][0]) {
        arr.splice(i - 1, 2);
        i = 0;
        break;
      }
    }
  }
  return (arr < 1) ? true : false
}

  // your solution

