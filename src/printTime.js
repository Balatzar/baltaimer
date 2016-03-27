module.exports = function(sec, min) {
  if (Array.isArray(sec) || typeof sec === "object") {
    return "Veuillez fournir des numbers.";
  }

  if (!sec && !min) {
    return "Le timer est fini!";
  } else if (sec > 59) {
    return "Trop de secondes.";
  } else if (min > 59) {
    return "Trop de minutes.";
  }

  sec = parseInt(sec);
  if (min) {
    min = parseInt(min);
  }

  if (isNaN(sec) || min && isNaN(min)) {
    return "Veuillez fournir des numbers.";
  }

  if (min && !sec) {
    return "Il reste " + min + " minutes.";
  }

  var print = "Il reste ";
  if (min) {
    print += min + " minutes et ";
  }
  print += sec + " secondes.";
  return print;
};
