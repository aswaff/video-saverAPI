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
    required: 'Please enter the URL'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  Category: {
    type: [{
      type: String,
      enum: ['Cute', 'Music', 'Other']
    }],
    default: ['Other']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);