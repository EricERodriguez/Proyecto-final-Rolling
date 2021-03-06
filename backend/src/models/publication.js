const { Schema, model } = require("mongoose");

const publicationSchema = new Schema({

  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  img: {
    type: String,
    default: "Sin imagen"
  },
  author: {
    type: String
  }

}, {
  timestamps: true
})

module.exports = model("Publication", publicationSchema);