// customMethods.ts

/**
 * Convert the first character of a string to upper case
 */
String.prototype.capitalizeInitial = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
