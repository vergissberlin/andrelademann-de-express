exports.ensureAuthenicated = function (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	else {
		req.session.returnTo = req.url;
		res.redirect('/user/login');
	}
};
