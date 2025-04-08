const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  authors: {
    type: [String],
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  publicationYear: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);