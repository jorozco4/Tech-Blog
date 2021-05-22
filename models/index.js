const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

Post.hasMany(Comment, {
  foreignKey: "postId",
});

Post.belongsTo(User, {
  foreignKey: "userId",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = {
  User,
  Post,
  Comment,
};
