const mongoose = require("mongoose");

mongoose.connect("mongodb://admin:admin@ds213209.mlab.com:13209/nightlife");

const schema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image_url: {
    type: String
  },
  rating: {
    type: Number
  },
  going: []
});

const LocationsModel = mongoose.model("Locations", schema);
module.exports = LocationsModel;
