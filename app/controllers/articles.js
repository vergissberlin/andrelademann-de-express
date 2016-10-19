/**
 * Articles controller
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
var bugsnag          = require('bugsnag'),
		express          = require('express'),
		mongoose         = require('mongoose'),
		Article          = mongoose.model('Article'),
		passportUtil     = require('../../util/passport'),
		multer           = require('multer'),
		multerStorageS3  = require('multer-storage-s3'),
		router           = express.Router(),
		storage          = multerStorageS3({
			destination: function (req, file, cb) {
				cb(null, 'uploads/article');
			},
			filename:    function (req, file, cb) {
				cb(null, file.originalname);
			}
		}),
		uploadMiddleware = multer({storage: storage});
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
		.limit(1000)
		.where('state').equals('published')
		.sort({updatedAt: -1})
		.exec(function (err, articles) {
			if (err) {
				bugsnag.notify(err);
				return next(err);
			}
			res.render('sections/article/list', {
				title:      res.__('Articles'),
				robots:     {
					current: false,
					follow:  true
				},
				articles:   articles,
				pagination: {
					page:      1,
					pageCount: 10
				}
			});
		});
});

/**
 * Articles state action
 *
 * @function
 */
router.get('/articles/state/:state', passportUtil.ensureAuthenicated, function (req, res, next) {
	var state = req.params.state;
	Article.find()
		.where('state').equals(state)
		.sort({updatedAt: -1})
		.exec(function (err, articles) {
			if (err) {
				bugsnag.notify(err);
				return next(err);
			}
			res.render('sections/article/list', {
				title:      res.__('Articles'),
				subtitle:   state.charAt(0).toUpperCase() + state.slice(1) + ' articles',
				articles:   articles,
				admin:      true,
				state:      state,
				robots:     {
					current: false,
					follow:  false
				},
				pagination: {
					page:      1,
					pageCount: 10
				}
			});
		});
});

/**
 * Add article action
 *
 * @function
 */
router.get('/articles/add', passportUtil.ensureAuthenicated, function (req, res) {
	res.render('sections/article/edit', {
		title:    res.__('Articles'),
		subtitle: res.__('Add articles'),
		robots:   {
			current: false,
			follow:  false
		},
		admin:    true
	});
});

/**
 * Add article action
 *
 * @function
 */
router.post(
	'/articles/add',
	uploadMiddleware.single('image-file'), function (req, res) {
		var getSlug = require('speakingurl');
		new Article({
			title:  req.body.title,
			slug:   getSlug(req.body.title, {lang: 'de', truncate: 80}),
			state:  req.body.state,
			meta:   {
				index:       req.body.index,
				description: req.body.description,
				keywords:    req.body.keywords
			},
			image:  req.body.image,
			teaser: req.body.teaser,
			text:   req.body.text
		}).save();

		res.redirect('/articles/state/published');
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
			meta:   {
				index:       req.body.index,
				description: req.body.description,
				keywords:    req.body.keywords
			},
			image:  req.body.image,
			teaser: req.body.teaser,
			text:   req.body.text
		}, function (err) {
			if (err) {
				bugsnag.notify(err);
				throw err;
			}
			res.redirect('/articles/state/' + req.body.state);
		});
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
				bugsnag.notify(err);
				return next(err);
			}
			res.render('sections/article/detail', {
				title:   res.__('Articles'),
				robots:  {
					current: article.meta.index || false,
					follow:  true
				},
				meta:    article.meta,
				article: article
			});
		});
});
