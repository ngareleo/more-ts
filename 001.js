// adding a single comment in js file will add ts checking

//@ts-check

let a = 100;
a = "Name";

/**
 * Adds VAT to the price. Default value is 0.2
 *
 * @param {number} price
 * @param {number} vat
 * @returns  {number}
 */
const addVAT = (price, vat = 0.2) => {
  return price * (1 + vat);
};

/**
 * @typedef {Object} Student
 * @property {string} name
 * @property {number} age
 */

/**
 * Create a student object
 *
 * @param {string} name
 * @param {number} age
 *
 * @returns {Student}
 */
const newStudent = (name, age) => {
  return {
    name,
    age,
  };
};

console.log(addVAT(1000));
console.log(newStudent("Leo", 20));
