const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  position: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  description: {
    type: String
  },
  salary: {
    type: String
  },
  tags: {
    type: Array,
    default: []
  },
  name: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  twitter: {
    type: String
  },
  url_email: {
    type: String,
    required: true
  },
  company: {
    type: String
  },
  contact_email: {
    type: String,
    required: true
  },
  logo: {
    type: String
  },
  createDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Job", jobSchema);
