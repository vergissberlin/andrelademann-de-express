var express = require('express'),
		router  = express.Router();

module.exports = function (app) {
	app.use('/', router);
};

router.get('/form', function (req, res) {

	res.render('form', {
		title: 'Upload formular'
	});
});
