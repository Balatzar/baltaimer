var exec = require('child_process').exec;
var printTime = require("./printTime");

var min = 24;
var sec = 60;
var initialRun = true;
var localOptions;

module.exports = function timer(options) {
  if (initialRun) {
    localOptions = options;
    initialRun = false;
  }

  sec -= 1;
  console.log(printTime(sec, min));
  if (!sec && min) {
    sec = 60;
    min -= 1;
  }
  if (sec || min) {
    setTimeout(timer, 1000);
  } else {
    if (localOptions && localOptions.setTimeout) {
      exec("xmessage -center -timeout " + localOptions.setTimeout + " 'Le timer est terminado !'");
    } else {
      exec("xmessage -center 'Le timer est terminado !'");
    }
  }
};
