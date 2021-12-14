'use strict';

var utils = require('../utils/writer.js');
var Game = require('../service/GameService');

module.exports.getGames = function getGames (req, res, next) {
  Game.getGames()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserGameHistory = function getUserGameHistory (req, res, next, userId) {
  Game.getUserGameHistory(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserGamesCooming = function getUserGamesCooming (req, res, next, userId) {
  Game.getUserGamesCooming(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
