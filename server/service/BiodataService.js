'use strict';


/**
 * Get spesific user biodata
 * This endpoint will return user biodata
 *
 * userId BigDecimal The id of the User
 * returns inline_response_200_4
 **/
exports.getUserById = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "phoneNumber" : "08123451234",
    "address" : "Jl. P Haha Hehe No 12",
    "avatarUrl" : "https://youtube.com",
    "bio" : "Lorem ipsum haah hehe haha",
    "id" : 1,
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
 * Post spesific user biodata
 * This endpoint will post user data
 *
 * body Object 
 * userId BigDecimal The id of the User
 * returns inline_response_200_4
 **/
exports.postUserById = function(body,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "phoneNumber" : "08123451234",
    "address" : "Jl. P Haha Hehe No 12",
    "avatarUrl" : "https://youtube.com",
    "bio" : "Lorem ipsum haah hehe haha",
    "id" : 1,
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
 * Update spesific user biodata
 * This endpoint will update user biodata
 *
 * body Object 
 * userId BigDecimal The id of the User
 * returns inline_response_200_4
 **/
exports.updatetUserById = function(body,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "phoneNumber" : "08123451234",
    "address" : "Jl. P Haha Hehe No 12",
    "avatarUrl" : "https://youtube.com",
    "bio" : "Lorem ipsum haah hehe haha",
    "id" : 1,
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

