'use strict';


/**
 * Get all games data
 * This endpoint will return all games data
 *
 * returns inline_response_200_1
 **/
exports.getGames = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "totalRound" : 3,
    "gameTimeEnd" : "2021-07-30 17:00:00 +0730",
    "winnerId" : 2,
    "isGameEnd" : true,
    "id" : 1,
    "firstTimePlay" : "2021-07-30 17:00:00 +0700"
  }, {
    "totalRound" : 3,
    "gameTimeEnd" : "2021-07-30 17:00:00 +0730",
    "winnerId" : 2,
    "isGameEnd" : true,
    "id" : 1,
    "firstTimePlay" : "2021-07-30 17:00:00 +0700"
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
 * Get history games
 * This endpoint will return user history games
 *
 * userId BigDecimal The id of the User
 * returns inline_response_200_6
 **/
exports.getUserGameHistory = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "totalRound" : 3,
    "gameTimeEnd" : "2021-07-30 17:00:00 +0730",
    "winnerId" : 2,
    "isGameEnd" : true,
    "id" : 1,
    "firstTimePlay" : "2021-07-30 17:00:00 +0700"
  }, {
    "totalRound" : 3,
    "gameTimeEnd" : "2021-07-30 17:00:00 +0730",
    "winnerId" : 2,
    "isGameEnd" : true,
    "id" : 1,
    "firstTimePlay" : "2021-07-30 17:00:00 +0700"
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
 * Get user games cooming soon
 * This endpoint will user games cooming soon
 *
 * userId BigDecimal The id of the User
 * returns inline_response_200_6
 **/
exports.getUserGamesCooming = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "totalRound" : 3,
    "gameTimeEnd" : "2021-07-30 17:00:00 +0730",
    "winnerId" : 2,
    "isGameEnd" : true,
    "id" : 1,
    "firstTimePlay" : "2021-07-30 17:00:00 +0700"
  }, {
    "totalRound" : 3,
    "gameTimeEnd" : "2021-07-30 17:00:00 +0730",
    "winnerId" : 2,
    "isGameEnd" : true,
    "id" : 1,
    "firstTimePlay" : "2021-07-30 17:00:00 +0700"
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

