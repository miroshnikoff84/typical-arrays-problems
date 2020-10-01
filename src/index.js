exports.min = function min (array=0) {
    if (!array || !array.length) return 0
    return Math.min(...array);
}

exports.max = function max (array=0) {
    if (!array || !array.length) return 0
  return Math.max(...array);
}

exports.avg = function avg (array) {
    if (!array || !array.length) return 0;
  return array.reduce((acc, el) => acc + el) / array.length;
}