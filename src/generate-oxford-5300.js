fs = require("fs");
wordList = JSON.parse(fs.readFileSync("../data/oxford-5300-wordlist.json"));
gkamus = JSON.parse(fs.readFileSync("../data/gkamus-en-id.json"));

oxford5k = [];

let undefinedWord = 0;

wordList.forEach((word) => {
  let definition = gkamus[word.toLowerCase()];

  if (definition == undefined) {
    console.log(`undefined word\t: ${word}`);
    undefinedWord++;
  }

  let obj = {
    word: word,
    id: {
      mean: word,
      definition: definition,
    },
  };
  oxford5k.push(obj);
});

console.log(`Total undefined word: ${undefinedWord}`);

fs.writeFile(
  "../data/oxford-5300.json",
  JSON.stringify(oxford5k),
  function (err) {
    if (err) throw err;
    console.log("complete");
  }
);
