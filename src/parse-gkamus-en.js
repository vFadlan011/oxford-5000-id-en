const lineByLine = require("n-readlines");
const liner = new lineByLine("./gkamus-en.dict");

let line;
let lineNumber = 0;

let dict = {};

while ((line = liner.next())) {
  let definition = line.toString("ascii");
  let word = definition.split("\t")[0];

  definition = definition.split("\t")[1];

  definition = definition.replace("kk. ", "");
  definition = definition.replace("kb. ", "");
  definition = definition.replace("ks. ", "");
  definition = definition.replace("kkt. ", "");
  definition = definition.replace("--kki . ", "");
  definition = definition.replace("kki. ", "");

  dict[word] = definition;

  lineNumber++;
}

fs = require("fs");
fs.writeFile("../data/gkamus-en-id.json", JSON.stringify(dict), function (err) {
  if (err) throw err;
  console.log("complete");
});
