let mongoose = require("mongoose");

let registerSchema = new mongoose.Schema({
  FirstName: { type: String, alphanum: true },
  LastName: { type: String },
  Email: { type: String },
  age: { type: Number },
  State: { type: String },
  address: { type: String },
  subscribe: { type: Boolean },
  tagsArray: []
});
let regsiterModel = mongoose.model("register", registerSchema);

module.exports = regsiterModel;
