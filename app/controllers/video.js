var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	Article = mongoose.model('Article');

module.exports = function (app) {
	app.use('/', router);
};

router.get('/video', function (req, res) {
	res.render('video', {
		title: 'Video'
	});
});
