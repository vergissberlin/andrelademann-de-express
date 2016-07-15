/**
 * Article Model
 * =============
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  state: String,
  title: {
    type: String,
    index: true,
    required: [true, 'Title is required']
  },
  image: String,
  teaser: String,
  text: String,
  comments: [],
  published: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

ArticleSchema.virtual('date')
  .get(function () {
    return this._id.getTimestamp();
  });

mongoose.model('Article', ArticleSchema);

/*
 var Article = mongoose.model('Article', ArticleSchema);

 Article.find(function (err, posts) {
 if( posts.length) return;

 new Article({
 title: 'Initial',
 url:'http://example.com',
 text: 'Lorem ipsum sit amet'
 }).save();
 });
 */
