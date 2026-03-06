const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    az: { type: String, required: true },
    en: { type: String, required: true },
    ru: { type: String, required: true },
  },
  description: {
    az: { type: String, required: true },
    en: { type: String, required: true },
    ru: { type: String, required: true },
  },
  image: { type: String },
  github: { type: String },
  demo: { type: String },
  tags: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);