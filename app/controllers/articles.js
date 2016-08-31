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
		.where('state').equals('published')
		.sort({updated: -1})
		.exec(function (err, articles) {
			if (err) {
				return next(err);
			}
			res.render('sections/article/list', {
				title: 'Articles',
				articles: articles,
				pagination: {
					page: 1,
					pageCount: 10
				}
			});

		});
});

router.get('/articles/state/:state', function (req, res, next) {
	var state = req.params.state;
	Article.find()
		.limit(10)
		.where('state').equals(state)
		.sort({updated: -1})
		.exec(function (err, articles) {
			if (err) {
				return next(err);
			}
			res.render('sections/article/list', {
				title: 'Articles',
				subtitle: state.charAt(0).toUpperCase() + state.slice(1) + ' articles',
				articles: articles,
				state: state,
				pagination: {
					page: 1,
					pageCount: 10
				}
			});
		});
});

/**
 * Add article
 */
router.get('/articles/add', function (req, res) {
	res.render('sections/article/edit', {
		title: 'Articles',
		subtitle: 'Add articles'
	});
});

router.post('/articles/add', function (req, res) {
	var getSlug = require('speakingurl');
	new Article({
		title: req.body.title,
		slug: getSlug(req.body.title, {lang: 'de', truncate: 80}),
		state: req.body.state,
		image: req.body.image,
		teaser: req.body.teaser,
		text: req.body.text
	}).save();

	res.redirect('/articles');
});

/**
 * Edit article
 */
router.post('/articles/edit/:id', function (req, res, next) {
	var getSlug = require('speakingurl');
	Article.findOneAndUpdate({'_id': req.params.id},
		{
			title: req.body.title,
			slug: getSlug(req.body.title, {lang: 'de', truncate: 80}),
			state: req.body.state,
			image: req.body.image,
			teaser: req.body.teaser,
			text: req.body.text
		}, function (err, article) {
			if (err) throw err;
			console.log(article);
			res.redirect('/articles/state/' + req.body.state);
		});
});

router.get('/articles/:slug', function (req, res, next) {
	Article.findOne({'slug': req.params.slug})
		.exec(function (err, article) {
			if (err) {
				return next(err);
			}
			res.render('sections/article/detail', {
				title: 'Articles',
				article: article
			});
		});
});
