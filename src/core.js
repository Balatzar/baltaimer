var printTime = require("./src/printTime");

var min = 24;
var sec = 60;

module.exports = function timer() {
  sec -= 1;
  console.log(printTime(sec, min));
  if (!sec && min) {
    sec = 60;
    min -= 1;
  }
  if (sec || min) {
    setTimeout(timer, 1000);
  } else {
    exec("xmessage -center -timeout 5 'Le timer est terminado !'");
  }
};