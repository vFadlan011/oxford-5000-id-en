fs = require("fs");

let wordlist_id = fs.readFileSync("../data/translate/id/wordlist.txt", "utf-8");
wordlist_id = wordlist_id.split("; ");
wordlist_id.pop();

let wordlist_en = JSON.parse(
  fs.readFileSync("../data/oxford-5300-wordlist.json")
);

let dict = {};

wordlist_en.forEach((word, id) => {
  dict[word] = wordlist_id[id].toLowerCase();
});

fs.writeFileSync(
  "../data/gtranslate-en-id.json",
  JSON.stringify(dict),
  function (err) {
    if (err) throw err;
    console.log("complete");
  }
);
