var express = require('express'),
		flash   = require('connect-flash'),
		app     = express();

app.get('/flash', function (req, res) {
	req.flash('info', 'Flash is back!');
	res.redirect('/');
});
