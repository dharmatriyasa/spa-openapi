'use strict';

var utils = require('../utils/writer.js');
var Round = require('../service/RoundService');

module.exports.getRoomEnemyInput = function getRoomEnemyInput (req, res, next, body, roundId) {
  Round.getRoomEnemyInput(body, roundId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRoomMasterInput = function getRoomMasterInput (req, res, next, body, roundId) {
  Round.getRoomMasterInput(body, roundId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRounds = function getRounds (req, res, next) {
  Round.getRounds()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserRoundHistory = function getUserRoundHistory (req, res, next, userId) {
  Round.getUserRoundHistory(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserRoundsCooming = function getUserRoundsCooming (req, res, next, userId) {
  Round.getUserRoundsCooming(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
