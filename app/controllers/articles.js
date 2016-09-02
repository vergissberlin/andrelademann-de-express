/**
 * Articles controller
 *
 * @project      AndreLademannDe
 * @author       André Lademann <vergissberlin@googlemail.com>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
var express      = require('express'),
		router       = express.Router(),
		mongoose     = require('mongoose'),
		passportUtil = require('../../util/passport'),
		Article      = mongoose.model('Article');

/**
 * Article controller
 *
 * @module controller/article
 */
module.exports = function (app) {
	app.use('/', router);
};

/**
 * Article controller
 *
 * @function
 */
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
				title:      'Articles',
				articles:   articles,
				pagination: {
					page:      1,
					pageCount: 10
				}
			});
			return undefined;
		});
	return undefined;
});

/**
 * Articles state action
 *
 * @function
 */
router.get('/articles/state/:state', passportUtil.ensureAuthenicated, function (req, res, next) {
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
				title:      'Articles',
				subtitle:   state.charAt(0).toUpperCase() + state.slice(1) + ' articles',
				articles:   articles,
				admin:      true,
				state:      state,
				pagination: {
					page:      1,
					pageCount: 10
				}
			});
			return undefined;
		});
	return undefined;
});

/**
 * Add article action
 *
 * @function
 */
router.get('/articles/add', passportUtil.ensureAuthenicated, function (req, res) {
	res.render('sections/article/edit', {
		title:    'Articles',
		admin:    true,
		subtitle: 'Add articles'
	});
	return undefined;
});

/**
 * Add article action
 *
 * @function
 */
router.post('/articles/add', passportUtil.ensureAuthenicated, function (req, res) {
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
	return undefined;
});

/**
 * Edit article
 *
 * @function
 */
router.post('/articles/edit/:id', passportUtil.ensureAuthenicated, function (req, res) {
	var getSlug = require('speakingurl');
	Article.findOneAndUpdate({'_id': req.params.id},
		{
			title:  req.body.title,
			slug:   getSlug(req.body.title, {lang: 'de', truncate: 80}),
			state:  req.body.state,
			image:  req.body.image,
			teaser: req.body.teaser,
			text:   req.body.text
		}, function (err) {
			if (err) {
				throw err;
			}
			res.redirect('/articles/state/' + req.body.state);
			return undefined;
		});
	return undefined;
});

/**
 * Article detail action
 *
 * @function
 */
router.get('/articles/:slug', function (req, res, next) {
	Article.findOne({'slug': req.params.slug})
		.exec(function (err, article) {
			if (err) {
				return next(err);
			}
			res.render('sections/article/detail', {
				title:   'Articles',
				article: article
			});
			return undefined;
		});
	return undefined;
});
