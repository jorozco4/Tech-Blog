const { Comment } = require("../models");

const commentData = [
  {
    comment: "Testing",
  },
  {
    comment: "Testing",
  },
  {
    comment: "Testing",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
