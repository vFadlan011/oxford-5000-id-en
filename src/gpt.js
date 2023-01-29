const translate = require("google-translate-api-x");
fs = require("fs");
let wordList = JSON.parse(fs.readFileSync("../data/oxford-5300-wordlist.json"));
const proxy = "http://123.123.123.123:80";

let words = wordList.slice(0, 32);
let translatedWords = {};
let promises = [];

for (let i = 0; i < words.length; i++) {
  promises.push(
    translate(words[i], { to: "id", proxy: proxy, setTimeout: 60000 })
  );
}

Promise.all(promises)
  .then((responses) => {
    for (let i = 0; i < responses.length; i++) {
      translatedWords[words[i]] = responses[i].text;
    }
    console.log(translatedWords);
  })
  .catch((err) => {
    console.error(err);
  });
