'use strict';

let object2json = function(obj) {
  let target = '{\n';
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = obj[key];
    target += `  "${key}": `
    if (typeof value === 'string') {
      target += `"${value}"`
    }
    else if (value instanceof Array) {
      target += `${array2json(value)}`;
    }
    else if (value instanceof Object) {
      target += `${object2json(value)}`;
    }
    else {
      target += `${value}`
    }
    if (i !== keys.length - 1) {
      target += ',\n'
    }
  }
  target += '\n}';
  return target;

  function array2json(arr) {
    let target = '[';
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
        target += `"${arr[i]}"`;
      }
      else if (arr[i] instanceof Array) {
        target += `${array2json(arr[i])}`;
      }
      else if (arr[i] instanceof Object) {
        target += `${object2json(arr[i])}`;
      }
      else {
        target += `${arr[i]}`
      }
      if (i !== arr.length - 1) {
        target += ',';
      }
    }
    target += ']';
    return target;
  };
}

module.exports = object2json;
