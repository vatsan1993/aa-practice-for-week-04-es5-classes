Array.prototype.isEqual = function (arr) {
  if (this.length !== arr.length) {
    return false;
  }
  let isSame = true;
  for (let i = 0; i < this.length; i++) {
    if (this[i] != arr[i]) {
      isSame = false;
      break;
    }
  }
  return isSame;
};
