fs = require("fs");
let wordList_id = fs.readFileSync("../data/translate/id/wordlist.txt", "utf-8");
wordList_id = wordList_id.split(",");
wordList_id.pop();
wordList_id.forEach((word, id) => {
  if (word[0] == " ") {
    wordList_id[id][0] = "";
  }
});

let wordList_en = fs.readFileSync("../data/oxford-5300-wordlist.json");
wordList_en = JSON.parse(wordList_en);

console.log(wordList_en.length);
console.log(wordList_id.length);
