/**
 * Check whether the given object is an object or not.
 * @param {any} obj The object to check.
 * @returns {boolean} true if given object is an object.
 */
export function isObject(obj: any): boolean {
  return obj instanceof Object && !(obj instanceof Number) && !(obj instanceof Array);
}

/**
 * Check the given object is an object and NOT empty.
 * @param {any} obj The object to check.
 * @returns {boolean} true if given object is an object and NOT empty.
 */
export function isObjectAndNotEmpty(obj: any): boolean {
  return isObject(obj) && Object.keys(obj).length > 0;
}