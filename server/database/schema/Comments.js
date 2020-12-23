const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comments = new Schema({
    // id: {unique:true, type: String},
    avatar: { type: String },
    username: { type: String },
    text: { type: String }
});

mongoose.model("Comments", Comments);
