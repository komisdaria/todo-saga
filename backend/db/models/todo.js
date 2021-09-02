const { Schema, model } = require('mongoose');

const TodoSchema = new Schema({
  text: String,
  status: Boolean,
  id: String,
});

module.exports = model('Todo', TodoSchema);
