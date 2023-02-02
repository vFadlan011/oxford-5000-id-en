fs = require("fs");
let wordlist = fs.readFileSync("../data/translate/id/wordlist.txt", "utf-8");
wordlist = wordlist.split("; ");
