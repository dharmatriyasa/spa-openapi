'use strict';


/**
 * user P R S input
 * This endpoint receive enemy input
 *
 * body Object  (optional)
 * roundId BigDecimal The id of the Round
 * returns inline_response_200_8
 **/
exports.getRoomEnemyInput = function(body,roundId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "id" : 1,
    "userInput" : "R",
    "userId" : 1
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
 * user P R S input
 * This endpoint receive user input
 *
 * body Object  (optional)
 * roundId BigDecimal The id of the Round
 * returns inline_response_200_8
 **/
exports.getRoomMasterInput = function(body,roundId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "id" : 1,
    "userInput" : "R",
    "userId" : 1
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
 * Get all rounds data
 * This endpoint will return all rounds data
 *
 * returns inline_response_200_3
 **/
exports.getRounds = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "user1Choose" : "P",
    "createdAt" : "2021-07-30 17:00:00 +0700",
    "winnerId" : 1,
    "id" : 1,
    "endAt" : "2021-07-30 17:00:00 +0705",
    "user2Choose" : "R",
    "updatedAt" : "2021-07-30 17:00:00 +0700"
  }, {
    "user1Choose" : "P",
    "createdAt" : "2021-07-30 17:00:00 +0700",
    "winnerId" : 1,
    "id" : 1,
    "endAt" : "2021-07-30 17:00:00 +0705",
    "user2Choose" : "R",
    "updatedAt" : "2021-07-30 17:00:00 +0700"
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
 * Get history rounds
 * This endpoint will return user history rounds
 *
 * userId BigDecimal The id of the User
 * returns inline_response_200_7
 **/
exports.getUserRoundHistory = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "winnerId" : 2,
    "id" : 1,
    "roomId" : 3,
    "status" : "open"
  }, {
    "winnerId" : 2,
    "id" : 1,
    "roomId" : 3,
    "status" : "open"
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
 * Get user rounds cooming soon
 * This endpoint will user rounds cooming soon
 *
 * userId BigDecimal The id of the User
 * returns inline_response_200_7
 **/
exports.getUserRoundsCooming = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "winnerId" : 2,
    "id" : 1,
    "roomId" : 3,
    "status" : "open"
  }, {
    "winnerId" : 2,
    "id" : 1,
    "roomId" : 3,
    "status" : "open"
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

