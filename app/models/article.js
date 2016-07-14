// Article model
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  url: String,
  text: String
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
