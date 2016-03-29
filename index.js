var fs = require("fs");
var core = require("./src/core");
var optionsParser = require("./src/optionsParser");

var options = {};
try {
  fs.readFile("options.json", function(err, data) {
    if (err) throw err;
    options = JSON.parse(data);
    options = optionsParser(options);
    if (options.err) throw options.err;
    core(options);
  });
} catch (e) {
  console.log(e);
}
