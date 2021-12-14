'use strict';


/**
 * Get all rooms data
 * This endpoint will return all rooms data
 *
 * returns inline_response_200_2
 **/
exports.getRooms = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "gameId" : 1,
    "roomStatus" : "open",
    "id" : 1,
    "roomName" : "abcde",
    "roomMasterId" : 3
  }, {
    "gameId" : 1,
    "roomStatus" : "open",
    "id" : 1,
    "roomName" : "abcde",
    "roomMasterId" : 3
  } ],
  "status" : "OK"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * user create room
 * This endpoint will create room and challenges other player
 *
 * body Object  (optional)
 * returns inline_response_200_10
 **/
exports.postAcceptRoom = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "roomEnemyId" : 2,
    "id" : 1,
    "roomMasterId" : 1,
    "status" : "accept"
  },
  "status" : "OK"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * user create room
 * This endpoint will create room and challenges other player
 *
 * body Object  (optional)
 * returns inline_response_200_9
 **/
exports.postCreateRoom = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "roomEnemyId" : 2,
    "id" : 1,
    "roomMasterId" : 1,
    "status" : "waiting"
  },
  "status" : "OK"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

