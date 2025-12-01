/**
 * @author Miles Aube
 * @version 1.0.0
 * @date 2025-12-01
 * @fileoverview This program that asks user for the ten canadian provinces,three territories, and their capital citites
 */

// variables
let Province0: String;
let Province1: String;
let Province2: String;
let Province3: String;
let Province4: String;
let Province5: String;
let Province6: String;
let Province10: String;
let Province11: String;
let Province12: String;
let Territory7: String;
let Territory8: String;
let Territory9: String;
let Capital0: String;
let Capital1: String;
let Capital2: String;
let Capital3: String;
let Capital4: String;
let Capital5: String;
let Capital6: String;
let Capital7: String;
let Capital8: String;
let Capital9: String;
let Capital10: String;
let Capital11: String;
let Capital12: String;


// Input provinces and territories
Province0 = prompt("What is one province?") || "No Province entered!";
Province1 = prompt("What is one province?") || "No Province entered!";
Province2 = prompt("What is one province?") || "No Province entered!";
Province3 = prompt("What is one province?") || "No Province entered!";
Province4 = prompt("What is one province?") || "No Province entered!";
Province5 = prompt("What is one province?") || "No Province entered!";
Province6 = prompt("What is one province?") || "No Province entered!";
Province10 = prompt("What is one province?") || "No Province entered!";
Province11 = prompt("What is one province?") || "No Province entered!";
Province12 = prompt("What is one province?") || "No Province entered!";
Territory7 = prompt("What is one territory?") || "No territory entered!";
Territory8 = prompt("What is one territory?") || "No territory entered!";
Territory9 = prompt("What is one territory?") || "No territory entered!";

// Input Capitals
Capital0 = prompt("What is the capital of "+Province0+"?") || "No Capital entered!";
Capital1 = prompt("What is the capital of " + Province1 + "?") || "No Capital entered!";
Capital2 = prompt("What is the capital of " + Province2 + "?") || "No Capital entered!";
Capital3 = prompt("What is the capital of " + Province3 + "?") || "No Capital entered!";
Capital4 = prompt("What is the capital of " + Province4 + "?") || "No Capital entered!";
Capital5 = prompt("What is the capital of " + Province5 + "?") || "No Capital entered!";
Capital6 = prompt("What is the capital of " + Province6 + "?") || "No Capital entered!";
Capital10 = prompt("What is the capital of " + Province10 + "?") || "No Capital entered!";
Capital11 = prompt("What is the capital of " + Province11 + "?") || "No Capital entered!";
Capital12 = prompt("What is the capital of " + Province12 + "?") || "No Capital entered!";
Capital7 = prompt("What is the capital of " + Territory7 + "?") || "No Territory entered!";
Capital8 = prompt("What is the capital of " + Territory8 + "?") || "No Territory entered!";
Capital9 = prompt("What is the capital of " + Territory9 + "?") || "No Territory entered!";


// output
console.log("Province/Territory".padEnd(30) + "Capital")
console.log(Province0.padEnd(30) + Capital0)
console.log(Province1.padEnd(30) + Capital1)
console.log(Province2.padEnd(30) + Capital2)
console.log(Province3.padEnd(30) + Capital3)
console.log(Province4.padEnd(30) + Capital4)
console.log(Province5.padEnd(30) + Capital5)
console.log(Province6.padEnd(30) + Capital6)
console.log(Province10.padEnd(30) + Capital10)
console.log(Province11.padEnd(30) + Capital11)
console.log(Province12.padEnd(30) + Capital12)
console.log(Territory7.padEnd(30) + Capital7)
console.log(Territory8.padEnd(30) + Capital8)
console.log(Territory9.padEnd(30) + Capital9)
