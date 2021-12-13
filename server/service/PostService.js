'use strict';


/**
 * Create Post
 * # Create Post  You can create a post to our website, by hitting this endpoint. By default, your post won't be shown to the public yet, the status of that post will be draft by default.  You can publish your post on another endpoint. 
 *
 * body Object 
 * returns inline_response_201_1
 **/
exports.createPost = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "updated_at" : "30-07-2021 12:00 +07:00",
    "author" : {
      "updated_at" : "30-07-2021 12:00 +07:00",
      "name" : "Fikri Rahmat Nurhidayat",
      "created_at" : "30-07-2021 12:00 +07:00",
      "id" : 1,
      "email" : "fnurhidayat@binar.co.id"
    },
    "created_at" : "30-07-2021 12:00 +07:00",
    "id" : 1,
    "title" : "Industrial Society and Its Future",
    "body" : "<p>Industrial society and its future</p>",
    "published_at" : "30-07-2021 12:00 +07:00",
    "status" : "DRAFT"
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
 * Delete Post
 * # Delete Post  You can remove your post, but why? 
 *
 * returns inline_response_200
 **/
exports.deletePost = function() {
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


/**
 * Get Post
 * # Get Post  You can get a specific post by giving this endpoint the ID of the post in the path.  When the post is not found, it will return `404`. 
 *
 * returns inline_response_201_1
 **/
exports.getPost = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "updated_at" : "30-07-2021 12:00 +07:00",
    "author" : {
      "updated_at" : "30-07-2021 12:00 +07:00",
      "name" : "Fikri Rahmat Nurhidayat",
      "created_at" : "30-07-2021 12:00 +07:00",
      "id" : 1,
      "email" : "fnurhidayat@binar.co.id"
    },
    "created_at" : "30-07-2021 12:00 +07:00",
    "id" : 1,
    "title" : "Industrial Society and Its Future",
    "body" : "<p>Industrial society and its future</p>",
    "published_at" : "30-07-2021 12:00 +07:00",
    "status" : "DRAFT"
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
 * Get Posts
 * # Get Posts  Use this endpoint to retrieve all posts that are available on the database. No pagination required.  When you send `status` in the query parameter and the value is `DRAFT`, it will only send you an error when the `author_id` is not you. 
 *
 * author_id Integer  (optional)
 * status String  (optional)
 * returns inline_response_200_1
 **/
exports.getPosts = function(author_id,status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "updated_at" : "30-07-2021 12:00 +07:00",
    "author" : {
      "updated_at" : "30-07-2021 12:00 +07:00",
      "name" : "Fikri Rahmat Nurhidayat",
      "created_at" : "30-07-2021 12:00 +07:00",
      "id" : 1,
      "email" : "fnurhidayat@binar.co.id"
    },
    "created_at" : "30-07-2021 12:00 +07:00",
    "id" : 1,
    "title" : "Industrial Society and Its Future",
    "body" : "<p>Industrial society and its future</p>",
    "published_at" : "30-07-2021 12:00 +07:00",
    "status" : "DRAFT"
  }, {
    "updated_at" : "30-07-2021 12:00 +07:00",
    "author" : {
      "updated_at" : "30-07-2021 12:00 +07:00",
      "name" : "Fikri Rahmat Nurhidayat",
      "created_at" : "30-07-2021 12:00 +07:00",
      "id" : 1,
      "email" : "fnurhidayat@binar.co.id"
    },
    "created_at" : "30-07-2021 12:00 +07:00",
    "id" : 1,
    "title" : "Industrial Society and Its Future",
    "body" : "<p>Industrial society and its future</p>",
    "published_at" : "30-07-2021 12:00 +07:00",
    "status" : "DRAFT"
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
 * Publish Post
 * # Publish Post  Now you can decide to show the post to the public or not by setting the publishment state. 
 *
 * body Object 
 * returns inline_response_201_1
 **/
exports.publishPost = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "updated_at" : "30-07-2021 12:00 +07:00",
    "author" : {
      "updated_at" : "30-07-2021 12:00 +07:00",
      "name" : "Fikri Rahmat Nurhidayat",
      "created_at" : "30-07-2021 12:00 +07:00",
      "id" : 1,
      "email" : "fnurhidayat@binar.co.id"
    },
    "created_at" : "30-07-2021 12:00 +07:00",
    "id" : 1,
    "title" : "Industrial Society and Its Future",
    "body" : "<p>Industrial society and its future</p>",
    "published_at" : "30-07-2021 12:00 +07:00",
    "status" : "DRAFT"
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
 * Update Post
 * # Update Post  You can update your post if you feel like there's something need to be updated. 
 *
 * body Object 
 * returns inline_response_201_1
 **/
exports.updatePost = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "updated_at" : "30-07-2021 12:00 +07:00",
    "author" : {
      "updated_at" : "30-07-2021 12:00 +07:00",
      "name" : "Fikri Rahmat Nurhidayat",
      "created_at" : "30-07-2021 12:00 +07:00",
      "id" : 1,
      "email" : "fnurhidayat@binar.co.id"
    },
    "created_at" : "30-07-2021 12:00 +07:00",
    "id" : 1,
    "title" : "Industrial Society and Its Future",
    "body" : "<p>Industrial society and its future</p>",
    "published_at" : "30-07-2021 12:00 +07:00",
    "status" : "DRAFT"
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

