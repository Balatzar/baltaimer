var tap = require("tap");
var printTime = require("../src/printTime");

tap.equal(printTime(1), "Il reste 1 secondes.", "printTime 1 seconde");
tap.equal(printTime(1, 0), "Il reste 1 secondes.", "printTime 1 seconde et 0 minute");
tap.equal(printTime(0, 1), "Il reste 1 minutes.", "printTime 0 seconde et 1 minute");
tap.equal(printTime(1, 1), "Il reste 1 minutes et 1 secondes.", "printTime 1 minute et 1 minute");
tap.equal(printTime(59, 24), "Il reste 24 minutes et 59 secondes.", "printTime 24 minutes et 59 secondes");
tap.equal(printTime(), "Le timer est fini!", "printTime sans input");
tap.equal(printTime(0, 0), "Le timer est fini!", "printTime avec 0 et 0");
tap.equal(printTime(60), "Trop de secondes.", "printTime trop de secondes");
tap.equal(printTime(45, 61), "Trop de minutes.", "printTime trop de minutes");
tap.equal(printTime("45", "2"), "Il reste 2 minutes et 45 secondes.", "printTime marche avec des strings");
tap.equal(printTime([3, 4]), "Veuillez fournir des numbers.", "printTime ne marche pas avec un array");
tap.equal(printTime({sec: 3, min: 4}), "Veuillez fournir des numbers.", "printTime ne marche pas avec un object");
tap.equal(printTime("1a"), "Il reste 1 secondes.", "printTime marche avec une mauvaise string commençant par un chiffre");
tap.equal(printTime("a1"), "Veuillez fournir des numbers.", "printTime  ne marche pas avec une mauvaise string commençant par une lettre");
