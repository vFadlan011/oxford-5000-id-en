let fs = require("fs");
let wordList = JSON.parse(fs.readFileSync("../data/oxford-5300-wordlist.json"));
let gkamus = JSON.parse(fs.readFileSync("../data/gkamus-en-id.json"));
let gtranslate = JSON.parse(fs.readFileSync("../data/gtranslate-en-id.json"));

oxford5k = [];

let undefinedWord = 0;

Object.keys(gtranslate).forEach((word, id) => {
  let definition = gkamus[word.toLowerCase()];

  if (definition == undefined) {
    console.log(`undefined word : ${word}`);
    definition = "";
    undefinedWord++;
  }

  let obj = {
    word: word,
    id: {
      mean: gtranslate[word],
      def: definition,
    },
  };
  oxford5k.push(obj);
});

console.log(`Total \`gkamus\`undefined word: ${undefinedWord}`);

fs.writeFile(
  "../data/oxford-5300.json",
  JSON.stringify(oxford5k),
  function (err) {
    if (err) throw err;
    console.log("complete");
  }
);
