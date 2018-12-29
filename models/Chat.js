const { Schema, model } = require("mongoose");

const ChatSchema = new Schema({
  nickname: String,
  message: String,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = model("Chat", ChatSchema);
