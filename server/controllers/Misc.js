'use strict';

var utils = require('../utils/writer.js');
var Misc = require('../service/MiscService');

module.exports.getRoot = function getRoot (req, res, next) {
  Misc.getRoot()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
