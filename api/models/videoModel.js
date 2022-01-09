'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  URL: {
    type: String,
    required: 'Please enter the URL'
  },
  HTML: {
    type: String,
    required: 'Please enter the HTML'
  },
  Thumbnail: {
    type: String,
    required: 'Please enter the Thumbnail'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  Category: {
    type: String,
    required: 'Please enter the Thumbnail'
  }
});

module.exports = mongoose.model('videos', TaskSchema);