'use strict';

module.exports = (obj, props) => {
  const newObj = {};
  if (props) {
    let index = -1;

    if(typeof props === 'string')
      props = props.split(',')
    
    while (++index < props.length) {
      const key = props[index];
      newObj[key] = obj[key];
    }
  }
  return newObj;
};