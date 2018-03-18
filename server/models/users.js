const mongoose = require("mongoose");

mongoose.connect("mongodb://admin:admin@ds213209.mlab.com:13209/nightlife");

const schema = new mongoose.Schema({
  twitterID: Number
});

const UserModel = mongoose.model("Users", schema);
module.exports = UserModel;
