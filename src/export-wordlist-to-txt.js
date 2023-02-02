fs = require("fs");
let wordList = JSON.parse(fs.readFileSync("../data/oxford-5300-wordlist.json"));

let str = [""];
let num = 0;

wordList.forEach((word) => {
  if (str[num].length + word.length + 2 < 15000) {
    str[num] += word + ", ";
  } else {
    num += 1;
    str[num] = "";
    str[num] += word + ", ";
  }
});

str.forEach((string, id) => {
  fs.writeFile(
    `../data/translate/en/wordlist-part-${id + 1}.txt`,
    string,
    function (err) {
      if (err) throw err;
      console.log(`Saved wordlist-part-${id + 1}.txt`);
    }
  );
});
