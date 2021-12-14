'use strict';


/**
 * Get all users data
 * This endpoint will return all users data
 *
 * returns inline_response_200
 **/
exports.getUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "phoneNumber" : "081234567890",
    "address" : "Jl. P. Salawati",
    "avatarUrl" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    "roleId" : 1,
    "bio" : "Hy my name is dharma. I'm progammer!",
    "id" : 1,
    "username" : "dharmatriyasa"
  }, {
    "phoneNumber" : "081234567890",
    "address" : "Jl. P. Salawati",
    "avatarUrl" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    "roleId" : 1,
    "bio" : "Hy my name is dharma. I'm progammer!",
    "id" : 1,
    "username" : "dharmatriyasa"
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

