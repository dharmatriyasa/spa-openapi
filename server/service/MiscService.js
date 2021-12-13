'use strict';


/**
 * Root
 * # Root  Use this endpoint to check the health or ping this API. It will return basic JSON object. 
 *
 * returns inline_response_200
 **/
exports.getRoot = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "data",
  "status" : "OK"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

