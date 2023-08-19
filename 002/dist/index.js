"use strict";
// @ts-check
/**
 * @typedef { import("../@types/person").Person } Person
 */
/**
 * Introduces a person
 *
 * @param {Person} person
 */
const printPerson = ({ name, age }) => {
    console.log(`Meet ${name}, aged: ${age} y/o`);
};
printPerson({ name: "Leo", age: 30 });
