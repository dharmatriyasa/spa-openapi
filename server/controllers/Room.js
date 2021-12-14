'use strict';

var utils = require('../utils/writer.js');
var Room = require('../service/RoomService');

module.exports.getRooms = function getRooms (req, res, next) {
  Room.getRooms()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postAcceptRoom = function postAcceptRoom (req, res, next, body) {
  Room.postAcceptRoom(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postCreateRoom = function postCreateRoom (req, res, next, body) {
  Room.postCreateRoom(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
