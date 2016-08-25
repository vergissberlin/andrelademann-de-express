var express  = require('express'),
		router   = express.Router(),
		mongoose = require('mongoose'),
		Article  = mongoose.model('Article');

module.exports = function (app) {
	app.use('/', router);
};


router.get('/', function (req, res, next) {
	Article.find()
		.limit(3)
		.sort({updated: -1})
		.exec(function (err, articles) {
			if (err) {
				return next(err);
			}
			res.render('home', {
				title:      'Welcome',
				articles:   articles
			});

		});
});
