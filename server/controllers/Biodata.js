'use strict';

var utils = require('../utils/writer.js');
var Biodata = require('../service/BiodataService');

module.exports.getUserById = function getUserById (req, res, next, userId) {
  Biodata.getUserById(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postUserById = function postUserById (req, res, next, body, userId) {
  Biodata.postUserById(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatetUserById = function updatetUserById (req, res, next, body, userId) {
  Biodata.updatetUserById(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
