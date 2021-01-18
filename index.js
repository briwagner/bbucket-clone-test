const fs = require('fs')

fs.writeFile("./appdist/build.txt", "Test content", function(err) {
  if (err) {
    return console.log(err)
  }
})