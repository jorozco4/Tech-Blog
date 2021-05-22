const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "Jesse_Orozco",
    password: "p@ssword1",
  },
  {
    id: 2,
    username: "Jesse_Orozco",
    password: "p@ssword1",
  },
  {
    id: 3,
    username: "Jesse_Orozco",
    password: "p@ssword1",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
