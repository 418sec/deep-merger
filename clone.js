const clone = (toObj, fromObj) => {
  if (fromObj.constructor === Array) {
    /* if they're array, just push values of fromObj to toObj */
    // for (let fromIdx = 0; fromIdx < fromObj.length; fromIdx++) {
    //   if (!toObj.includes(fromObj[fromIdx])) {
    //     toObj.push(fromObj[fromIdx]);
    //   }
    // }

    /* replace array, don't merge */
    console.log('replace', toObj, 'with', fromObj)
    toObj.length = 0;
    toObj.push(...fromObj);
    
  } else if (fromObj.constructor === Object) {
    // if they're object, deep clone via recursion

    const fromObjKeys = Object.keys(fromObj);

    for (let keyIdx = 0; keyIdx < fromObjKeys.length; keyIdx++) {
      const fromObjKey = fromObjKeys[keyIdx];

      if (Object.prototype.hasOwnProperty.call(toObj, fromObjKey) && Object.prototype.hasOwnProperty.call(fromObj, fromObjKey) // both of them has values
        && typeof toObj[fromObjKey] === 'object' && typeof fromObj[fromObjKey] === 'object' // both of them type object
        && ((toObj[fromObjKey].constructor === Object && fromObj[fromObjKey].constructor === Object) // both of them really Object
        || (toObj[fromObjKey].constructor === Array && fromObj[fromObjKey].constructor === Array))) { // both of them Array
        clone(toObj[fromObjKey], fromObj[fromObjKey]);
      } else { // else, just override toObj attrib's value
        toObj[fromObjKey] = fromObj[fromObjKey]; // eslint-disable-line no-param-reassign
      }
    } // end for loop
  } // end elseif fromObj is Object

  return toObj;
};

module.exports = clone;
