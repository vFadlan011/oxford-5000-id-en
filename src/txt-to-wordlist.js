fs = require("fs");
let wordList = fs.readFileSync("../data/translate/id/wordlist-part-1.txt");
wordList += fs.readFileSync("../data/translate/id/wordlist-part-2.txt");
wordList += fs.readFileSync("../data/translate/id/wordlist-part-3.txt");
wordList += fs.readFileSync("../data/translate/id/wordlist-part-4.txt");

let arr = wordList.split(", ");
arr.pop();
console.log(arr[5225]);
