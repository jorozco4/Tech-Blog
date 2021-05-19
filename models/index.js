const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.belongsTo(Category, {
  foreignKey: "user",
});

Post.hasMany(Product, {
  foreignKey: "post",
});

comment.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "user_id",
});

comment.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "post_id",
});

module.exports = {
  User,
  Post,
  Comment,
};
