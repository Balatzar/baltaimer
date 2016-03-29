var options = [
  "setTimeout",
];

optionsRules = {
  setTimeout: {
    type: "number",
    max: 60,
    min: 0
  }
};

module.exports = function(userOptions) {
  for (var option in userOptions) {
    if (userOptions.hasOwnProperty(option)) {
      if (options.indexOf(option) === -1) {
        return { err: "unknow option: '" + option + "'" };
      }
      if (typeof userOptions[option] !== optionsRules[option].type) {
        return { err: "'" + option + "' option must receive " + optionsRules[option].type + " argument"};
      }
      if (optionsRules[option].hasOwnProperty("max")) {
        if (userOptions[option] > optionsRules[option].max) {
          return { err: "'" + option + "' option value must not be greater than " + optionsRules[option].max };
        }
      }
      if (optionsRules[option].hasOwnProperty("min")) {
        if (userOptions[option] < optionsRules[option].min) {
          return { err: "'" + option + "' option value must not be smaller than " + optionsRules[option].min };
        }
      }
    }
  }
  return userOptions;
};
