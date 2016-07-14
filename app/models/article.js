/**
 * Article Model
 * =============
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
    state: String,
    datePublished: String,
    image: String,
  url: String,
    teaser: String,
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


 var Post = new keystone.List('Post', {
 map: { name: 'title' },
 autokey: { path: 'slug', from: 'title', unique: true },
 });

 Post.add({
 title: { type: String, required: true },
 state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
 author: { type: Types.Relationship, ref: 'User', index: true },
 publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
 image: { type: Types.CloudinaryImage },
 content: {
 brief: { type: Types.Html, wysiwyg: true, height: 150 },
 extended: { type: Types.Html, wysiwyg: true, height: 400 },
 },
 categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
 });

 Post.schema.virtual('content.full').get(function () {
 return this.content.extended || this.content.brief;
 });

 Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
 Post.register();
 */
