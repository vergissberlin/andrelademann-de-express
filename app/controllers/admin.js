var express = require('express'),
	router = express.Router();

module.exports = function (app) {
	app.use('/', router);
};

router.get('/admin', function (req, res) {

	res.render('admin', {
		title: 'Admin page'
	});
});
