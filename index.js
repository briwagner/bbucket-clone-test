const fs = require('fs')

function generateFile(filename, text) {
  fs.writeFile(filename, text, function(err) {
    if (err) {
      return console.log(err)
    }
  })
}

function timestampMessage(t) {
  return t + " " + Date.now();
}

let appText = timestampMessage("Test content");
let filename = "./appdist/build.txt";

generateFile(filename, appText);