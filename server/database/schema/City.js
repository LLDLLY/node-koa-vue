const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Citys = new Schema({
  id: { unique: true, type: String },
  name: { type: String },
  spell: { type: String },
  hot: { type: Boolean, default: false },
  key: { type: String, default: '' },
})

mongoose.model('City', Citys);
