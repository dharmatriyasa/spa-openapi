'use strict';


/**
 * Get spesific user biodata
 * This endpoint will return user biodata
 *
 * userId BigDecimal The id of the User
 * returns inline_response_200_5
 **/
exports.getUserStats = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "levelId" : 2,
    "id" : 1,
    "userId" : 1,
    "point" : 300
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

