const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

Post.hasMany(Comment, {
  foreignKey: "postId",
});

Post.belongstTo(User, {
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
