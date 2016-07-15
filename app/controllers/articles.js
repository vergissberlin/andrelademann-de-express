var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};


router.get('/articles', function (req, res, next) {
  Article.find()
    .limit(10)
    .sort({updated: -1})
    .exec(function (err, articles) {
      if (err) return next(err);
      res.render('articles', {
        title: 'Articles',
        articles: articles,
        pagination: {
          page: 1,
          pageCount: 10
        }
      });

    });
});

router.post('/articles/add', function (req, res) {

  new Article({
    title: req.body.title,
    state: req.body.state,
    image: req.body.image,
    teaser: req.body.teaser,
    text: req.body.text
  }).save();

  res.redirect('/articles');
});
