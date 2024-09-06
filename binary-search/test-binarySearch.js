import {binarySearch} from "./binarySearch.js";

window.addEventListener("load", start);

const numbers = [21,22,23,25,27,28,29,31,32,34,35];

const ordliste = ["andedam", "andegård", "bondefanget", "bondegård", "børnearbejde", "gadefejer", "gær", "gødning", "gaardejer", "kalapøjser", "kalundborg", "kørt", "kårde", "ålborg", "aarhus"];
function start(){
    console.log("Binary Search");
    console.log(binarySearch(25, numbers, numberCompare));
    console.log(binarySearch("gaardejer", ordliste, stringCompare));
}

function stringCompare(a, b){
    return a.localeCompare(b);
}

function numberCompare(a, b){
    return a - b;
}