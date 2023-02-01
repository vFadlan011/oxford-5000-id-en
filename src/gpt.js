const translate = require("google-translate-api-x");
fs = require("fs");
let wordList = JSON.parse(fs.readFileSync("../data/oxford-5300-wordlist.json"));
const proxy = "http://123.123.123.123:80";

let startAt = 0;
let pages = Math.ceil((wordList.length - startAt) / 100);

for (let i = 0; i < pages; i++) {
  let min = startAt + i * 100;
  let chunk = wordList.slice(min, min + 99);

  let translatedWords = {};
  let promises = [];

  for (let i = 0; i < chunk.length; i++) {
    promises.push(translate(chunk[i], { to: "id" }));
  }

  Promise.all(promises)
    .then((responses) => {
      console.log(`Translating from ${min} to ${min + 99}`);

      for (let i = 0; i < responses.length; i++) {
        translatedWords[chunk[i]] = responses[i].text;
      }

      fs.writeFile(
        `../data/api-fetch/translate/${min}-${min + 99}-google-translate.json`,
        JSON.stringify(translatedWords),
        function (err) {
          if (err) throw err;
          console.log("complete");
        }
      );

      console.log(translatedWords);
    })
    .catch((err) => {
      console.error(err);
    });
}
