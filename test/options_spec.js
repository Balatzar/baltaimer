var tap = require("tap");
var fs = require("fs");
var optionsParser = require("../src/optionsParser");

// TESTING FS METHODS

var content = "coucou";

tap.test("create a file", function(childTest) {
  fs.writeFile("test.txt", content, 'utf8', function(err, files) {
    if (err) throw err;
    fs.readFile("test.txt", 'utf8', function(err, data) {
      if (err) throw err;
      childTest.equal(data, content, "file is created");
      fs.unlink("test.txt", function(err) {
        if (err) throw err;
        childTest.end();
      });
    });
  });
});

var json = {
  coucou: 5
};

tap.test("create a json file", function(childTest) {
  var temp = JSON.stringify(json);
  fs.writeFile("test.json", temp, function(err, files) {
    if (err) throw err;
    fs.readFile("test.json", function(err, data) {
      if (err) throw err;
      data = JSON.parse(data);
      childTest.equal(data.coucou, json.coucou, "json file is created");
      fs.unlink("test.json", function(err) {
        if (err) throw err;
        childTest.end();
      });
    });
  });
});

// TESTING OPTIONS PARSER

var goodOption = {
  setTimeout: 5
};

tap.deepEqual(optionsParser(goodOption), goodOption, "works with a good argument");

var wrongProperty = {
  setTimout: 5
};

tap.deepEqual(optionsParser(wrongProperty), { err: "unknow option: 'setTimout'" }, "typo in property name");

var wrongPropertyType = {
  setTimeout: "a"
};

tap.deepEqual(optionsParser(wrongPropertyType), { err: "'setTimeout' option must receive number argument" }, "wrong argument type");

var wrongPropertyValueMax = {
  setTimeout: 61
};

tap.deepEqual(optionsParser(wrongPropertyValueMax), { err: "'setTimeout' option value must not be greater than 60" }, "wrong argument value (max)");

var wrongPropertyValueMin = {
  setTimeout: -1
};

tap.deepEqual(optionsParser(wrongPropertyValueMin), { err: "'setTimeout' option value must not be smaller than 0" }, "wrong argument value (min)");
