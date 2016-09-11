/**
 * Home controller
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
var express  = require('express'),
		router   = express.Router(),
		mongoose = require('mongoose'),
		Article  = mongoose.model('Article');

/**
 * Home controller
 *
 * @module controller/home
 */
module.exports = function (app) {
	app.use('/', router);
};

/**
 * Home controller
 *
 * @function
 */
router.get('/', function (req, res, next) {
	Article.find()
		.limit(3)
		.sort({updatedAt: -1})
		.exec(function (err, articles) {
			if (err) {
				return next(err);
			}
			res.render('home', {
				title:    res.__('Welcome'),
				articles: articles,
				robots:   {
					current: false,
					follow:  true
				}
			});
		});
});
