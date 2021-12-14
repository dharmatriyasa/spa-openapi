'use strict';

var utils = require('../utils/writer.js');
var Stats = require('../service/StatsService');

module.exports.getUserStats = function getUserStats (req, res, next, userId) {
  Stats.getUserStats(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
