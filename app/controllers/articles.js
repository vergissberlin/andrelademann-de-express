var express  = require('express'),
		router   = express.Router(),
		mongoose = require('mongoose'),
		Article  = mongoose.model('Article');

module.exports = function (app) {
	app.use('/', router);
};


router.get('/articles', function (req, res, next) {
	Article.find()
		.limit(10)
		.where('state').equals('published')
		.sort({updated: -1})
		.exec(function (err, articles) {
			if (err) {
				return next(err);
			}
			res.render('article-list', {
				title:      'Articles',
				articles:   articles,
				pagination: {
					page:      1,
					pageCount: 10
				}
			});

		});
});

router.get('/articles/:slug', function (req, res, next) {
	Article.findOne({'slug': req.params.slug})
		.exec(function (err, article) {
			if (err) {
				return next(err);
			}
			res.render('article-detail', {
				title:   'Articles',
				article: article
			});
		});
});


router.post('/articles/add', function (req, res) {
	var getSlug = require('speakingurl');
	new Article({
		title:  req.body.title,
		slug:   getSlug(req.body.title, {lang: 'de', truncate: 80}),
		state:  req.body.state,
		image:  req.body.image,
		teaser: req.body.teaser,
		text:   req.body.text
	}).save();

	res.redirect('/articles');
});
