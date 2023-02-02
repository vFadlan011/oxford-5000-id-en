fs = require("fs");
wordList = JSON.parse(fs.readFileSync("./oxford-6000-scraped.json"));
wordList_key = Object.keys(wordList);

wordList_key.forEach((word, id) => {
  wordList_key[id] = word.toLowerCase();
});

oxford5k = JSON.parse(fs.readFileSync("./oxford-5300-wordlist.json"));

let count = 0;
oxford5k.forEach((word) => {
  if (!wordList_key.includes(word.toLowerCase())) {
    count++;
  }
});

console.log(
  `Jumlah kata yang tidak ada di oxford-6000-scraped.json : ${count}`
);
console.log(`Jumlah kata di oxford-5300-wordlist.json : ${oxford5k.length}`);
