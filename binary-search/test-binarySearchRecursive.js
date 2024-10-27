import { BinarySearchRecursive } from "./binarySearchRecursive.js";

window.addEventListener("load", start);

const numbers = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

const ordliste = [
  "andedam",
  "andegård",
  "bondefanget",
  "bondegård",
  "børnearbejde",
  "gadefejer",
  "gær",
  "gødning",
  "gaardejer",
  "kalapøjser",
  "kalundborg",
  "kørt",
  "kårde",
  "ålborg",
  "aarhus",
];

function start() {
  console.log("Binary Search Recursive");
  console.log(
    "Recursive search. At index: ",
    BinarySearchRecursive(25, numbers, 0, numbers.length - 1, numberCompare)
  );
  console.log(
    "Recursive search. At index: ",
    BinarySearchRecursive(
      "gaardejer",
      ordliste,
      0,
      ordliste.length - 1,
      stringCompare
    )
  );
}

function stringCompare(a, b) {
  return a.localeCompare(b);
}

function numberCompare(a, b) {
  return a - b;
}
